import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
import { ask, yesno } from '@reach-sh/stdlib/ask.mjs';

const stdlib = loadStdlib(process.env);

const startingBalance = stdlib.parseCurrency(100);

const fmt = (x) => { return ( stdlib.formatCurrency(x, 6) * 1000000); }

const acc  = await stdlib.newTestAccount(startingBalance);
console.log('Hello, new user!');

console.log('Launching...');

const main = async () => {
  const isAlice = await ask(
    `Do you want to create a contract and have APIs interact with it? If no you would have to interact with an already existing one as an API`,
    yesno
  );

  const who = isAlice ? 'Alice' : 'Bob';
  console.log(`Starting as ${who}`);

  //Contract gets initialized here
  let ctc = null; 

  if (isAlice){ //if deployer
    console.log("Creating the unique nft");
    const nft = await stdlib.launchToken(acc, "raffle", "raf", {
      supply: stdlib.parseCurrency(1),
      decimals: 0,
    });
    console.log("NFT created successfuly");

    // Defining Alice's interact interface
    const Alice = {
      supplyRaffleInformation: async () => {
        const numberOfTickets = await ask("How many tickets do you want to create?", parseInt);

        return [nft.id, numberOfTickets];
      },

      supplyWinningNumber: (numberOfTickets) => {
        console.log(fmt(numberOfTickets), "tickets have been created.");
        const winningNumber =  Math.round(Math.random() * numberOfTickets);
        console.log('The winning number is', winningNumber);
        return winningNumber;
      },

      displayHash: (hash) => {
        console.log('The hash of the winning number is', hash);
      },

      displayWinner: (address) => {
        console.log('The contestant with address', address, 'has won this raffle draw.')
      },

      informLackOfWinner: () => {
        console.log('No contestant won this round!!!')
      },

      getRegInfo: (address, draw) => {
        console.log('A contestant with address', address, 'just submitted a draw of', fmt(draw));
      },

      inspect: (address, draw) => {
        console.log('Address:', address, '...Mapped to:', fmt(draw));
      }
    }
    
    ctc =  acc.contract(backend); // connect to contract
    backend.Alice(ctc, {
      ...Alice,
      ...stdlib.hasRandom,
    });
    const info = JSON.stringify(await ctc.getInfo(), null, 1) //fetch contract info
    console.log("Copy the contract information below")
    console.log(info);
  }
  else {
    const info = await ask(
      `Please paste the contract information of the contract you want to connect to:`, 
      JSON.parse
    );
    ctc = acc.contract(backend, info);

    console.log('Subscribing to NFT');
    const nftID = await ctc.apis.Bob.subscribeToNFT();
    console.log('The nft id gotten from the backend is', nftID);
    await acc.tokenAccept(nftID);
    console.log('You have subscribed to the nft successfully.')

    const ticketsAvailable = await ctc.apis.Bob.getNumberOfTicketsAvailable();
    console.log('Number of tickets available:', fmt(ticketsAvailable));

    const draw = Math.round(Math.random() * fmt(ticketsAvailable));

    console.log('You drew the ticket with number', draw);
    await ctc.apis.Bob.drawRaffleTicket(draw);

    const interval = setInterval(async () => {
      const [isResultOut, isWinner] = await ctc.apis.Bob.checkStatus();

      if (!isResultOut) {
        console.log("....");
        console.log("Results have not been released yet. Please be patient");
      }
      else {
        if (isWinner) {
          console.log("....");
          console.log("Congratulations, you won!");
        }
        else {
          console.log("....");
          console.log("You lost! Better luck next time.");
        }

        clearInterval((interval))
      }
    }, 5000)
  }
}

await main();
