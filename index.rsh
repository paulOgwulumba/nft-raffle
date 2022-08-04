'reach 0.1';

export const main = Reach.App(() => {
  const Alice = Participant('Alice', {
    supplyRaffleInformation: Fun([], Tuple(Token, UInt)),
  });
  const Bob = API('Bob', {
    subscribeToNFT: Fun([], Token),
    drawRaffleTicket: Fun([UInt], Null),
    getNumberOfTicketsAvailable: Fun([], UInt),
  });
  init();

  // The first one to publish deploys the contract
  Alice.only(() => {
    const [NFT, numberOfTickets] = declassify(interact.supplyRaffleInformation());
  })
  Alice.publish(NFT, numberOfTickets);
  commit();

  Alice.publish();

  const submissions = new Map(Address, UInt);

  const [ numOfDraws ] = 
    parallelReduce([ 0 ])
      .invariant( balance() ==  balance())
      .while(numOfDraws < numberOfTickets)
      .api_(Bob.subscribeToNFT, () => {
        check(this != Alice, "Not deployer");

        return [0, (resolve) => {
          resolve(NFT)

          return [numOfDraws]
        }]
      })
      .api_(Bob.getNumberOfTicketsAvailable, () => {
        check(this != Alice, "Not deployer");

        return [0, (resolve) => {
          resolve(numberOfTickets)

          return [numOfDraws]
        }]
      })
      .api_(Bob.drawRaffleTicket, (draw) => {
        check( this != Alice, "Not Deployer");

        return [ 0, (resolve) => {
          resolve(null);

          if(submissions[this] == null){
            submissions[this] = draw;
            return [ numOfDraws + 1];
          }
          else {
            return [ numOfDraws ];
          }
        }]
      })
    
  commit();
  exit();
});
