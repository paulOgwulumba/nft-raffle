// Automatically generated with Reach 0.1.11 (578589af)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (578589af)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Digest;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc2, ctc2, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Null;
  const ctc8 = stdlib.T_Data({
    None: ctc7,
    Some: ctc2
    });
  const ctc9 = stdlib.T_Data({
    None: ctc7,
    Some: ctc7
    });
  const map0_ctc = ctc8;
  
  const map1_ctc = ctc9;
  
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2, ctc3, ctc6],
      2: [ctc0, ctc1, ctc2, ctc3, ctc6],
      3: [ctc0, ctc1, ctc2, ctc3, ctc6],
      5: [ctc0, ctc1, ctc0, ctc6, ctc2, ctc4],
      7: [ctc0, ctc1, ctc2, ctc0, ctc2, ctc2, ctc2, ctc6, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Tuple([ctc2, ctc3]);
  return {
    mapDataTy: ctc4
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Tuple([ctc4, ctc1]);
  const ctc6 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc7 = stdlib.T_Digest;
  const ctc8 = stdlib.T_Tuple([]);
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Data({
    Bob_checkStatus0_104: ctc8,
    Bob_drawRaffleTicket0_104: ctc9,
    Bob_getNumberOfTicketsAvailable0_104: ctc8,
    Bob_subscribeToNFT0_104: ctc8
    });
  const ctc11 = stdlib.T_Bool;
  const ctc12 = stdlib.T_Tuple([ctc11, ctc11]);
  const ctc13 = stdlib.T_Address;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc11]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: false,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: false,
    ty: map1_ctc
    });
  
  
  const v1072 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v1073 = [v1072];
  const v1079 = stdlib.protect(ctc5, await interact.supplyRaffleInformation(), {
    at: './index.rsh:27:79:application',
    fs: ['at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'supplyRaffleInformation',
    who: 'Alice'
    });
  const v1080 = v1079[stdlib.checkedBigNumberify('./index.rsh:27:79:application', stdlib.UInt_max, '0')];
  const v1081 = v1079[stdlib.checkedBigNumberify('./index.rsh:27:79:application', stdlib.UInt_max, '1')];
  const v1084 = stdlib.protect(ctc1, await interact.supplyWinningNumber(v1081), {
    at: './index.rsh:28:56:application',
    fs: ['at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'supplyWinningNumber',
    who: 'Alice'
    });
  const v1085 = stdlib.protect(ctc1, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:29:55:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v1086 = stdlib.digest(ctc6, [v1085, v1084]);
  stdlib.protect(ctc0, await interact.displayHash(v1086), {
    at: './index.rsh:31:25:application',
    fs: ['at ./index.rsh:26:13:application call to [unknown function] (defined at: ./index.rsh:26:17:function exp)'],
    msg: 'displayHash',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1080, v1081, v1086],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc1, ctc7],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1089, v1090, v1091], secs: v1093, time: v1092, didSend: v38, from: v1088 } = txn1;
      
      const v1094 = v1073[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '0')];
      const v1096 = v1094[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '1')];
      const v1097 = v1094[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '2')];
      const v1098 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1096, v1097];
      const v1099 = stdlib.Array_set(v1073, stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '0'), v1098);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v1089
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc1, ctc7],
    waitIfNotPresent: false
    }));
  const {data: [v1089, v1090, v1091], secs: v1093, time: v1092, didSend: v38, from: v1088 } = txn1;
  const v1094 = v1073[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '0')];
  const v1096 = v1094[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '1')];
  const v1097 = v1094[stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '2')];
  const v1098 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1096, v1097];
  const v1099 = stdlib.Array_set(v1073, stdlib.checkedBigNumberify('./index.rsh:33:9:dot', stdlib.UInt_max, '0'), v1098);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v1088, v1089, v1090, v1091, v1099],
    evt_cnt: 0,
    funcNum: 1,
    lct: v1092,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:36:15:decimal', stdlib.UInt_max, '1'), v1089]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1103, time: v1102, didSend: v45, from: v1101 } = txn2;
      
      ;
      const v1104 = v1099[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0')];
      const v1105 = v1104[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0')];
      const v1106 = stdlib.add(v1105, stdlib.checkedBigNumberify('./index.rsh:36:15:decimal', stdlib.UInt_max, '1'));
      const v1109 = v1104[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '1')];
      const v1110 = v1104[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '2')];
      const v1111 = [v1106, v1109, v1110];
      const v1112 = stdlib.Array_set(v1099, stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0'), v1111);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./index.rsh:36:15:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v1089
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc1, ctc7, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1103, time: v1102, didSend: v45, from: v1101 } = txn2;
  ;
  const v1104 = v1099[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0')];
  const v1105 = v1104[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0')];
  const v1106 = stdlib.add(v1105, stdlib.checkedBigNumberify('./index.rsh:36:15:decimal', stdlib.UInt_max, '1'));
  const v1109 = v1104[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '1')];
  const v1110 = v1104[stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '2')];
  const v1111 = [v1106, v1109, v1110];
  const v1112 = stdlib.Array_set(v1099, stdlib.checkedBigNumberify('./index.rsh:36:9:dot', stdlib.UInt_max, '0'), v1111);
  ;
  const v1113 = stdlib.addressEq(v1088, v1101);
  stdlib.assert(v1113, {
    at: './index.rsh:36:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v1088, v1089, v1090, v1091, v1112],
    evt_cnt: 0,
    funcNum: 2,
    lct: v1102,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:40:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1116, time: v1115, didSend: v50, from: v1114 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc1, ctc7, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1116, time: v1115, didSend: v50, from: v1114 } = txn3;
  ;
  const v1117 = stdlib.addressEq(v1088, v1114);
  stdlib.assert(v1117, {
    at: './index.rsh:40:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn4 = await (ctc.sendrecv({
    args: [v1088, v1089, v1090, v1091, v1112, v1085, v1084],
    evt_cnt: 2,
    funcNum: 3,
    lct: v1115,
    onlyIf: true,
    out_tys: [ctc1, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:52:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1121, v1122], secs: v1124, time: v1123, didSend: v61, from: v1120 } = txn4;
      
      ;
      const v1128 = v1088;
      const v1129 = stdlib.checkedBigNumberify('./index.rsh:56:42:decimal', stdlib.UInt_max, '0');
      const v1130 = stdlib.checkedBigNumberify('./index.rsh:56:22:decimal', stdlib.UInt_max, '0');
      const v1131 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v1132 = v1123;
      const v1138 = v1112;
      const v1139 = stdlib.checkedBigNumberify('./index.rsh:23:9:after expr stmt semicolon', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v1151 = stdlib.lt(v1130, v1090);
        const v1152 = stdlib.eq(v1131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v1153 = stdlib.eq(v1131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
        const v1154 = v1152 ? true : v1153;
        const v1155 = v1151 ? v1154 : false;
        const v1156 = stdlib.lt(v1129, v1090);
        const v1157 = v1155 ? v1156 : false;
        
        return v1157;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1815 = stdlib.addressEq(v1128, v1088);
        sim_r.isHalt = false;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc1, ctc7, ctc15, ctc1, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v1121, v1122], secs: v1124, time: v1123, didSend: v61, from: v1120 } = txn4;
  ;
  const v1125 = stdlib.addressEq(v1088, v1120);
  stdlib.assert(v1125, {
    at: './index.rsh:52:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v1126 = stdlib.digest(ctc6, [v1121, v1122]);
  const v1127 = stdlib.digestEq(v1091, v1126);
  stdlib.assert(v1127, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:53:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  let v1128 = v1088;
  let v1129 = stdlib.checkedBigNumberify('./index.rsh:56:42:decimal', stdlib.UInt_max, '0');
  let v1130 = stdlib.checkedBigNumberify('./index.rsh:56:22:decimal', stdlib.UInt_max, '0');
  let v1131 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
  let v1132 = v1123;
  let v1138 = v1112;
  let v1139 = stdlib.checkedBigNumberify('./index.rsh:23:9:after expr stmt semicolon', stdlib.UInt_max, '0');
  
  while (await (async () => {
    const v1151 = stdlib.lt(v1130, v1090);
    const v1152 = stdlib.eq(v1131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
    const v1153 = stdlib.eq(v1131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
    const v1154 = v1152 ? true : v1153;
    const v1155 = v1151 ? v1154 : false;
    const v1156 = stdlib.lt(v1129, v1090);
    const v1157 = v1155 ? v1156 : false;
    
    return v1157;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc10],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v1256], secs: v1258, time: v1257, didSend: v790, from: v1255 } = txn5;
    switch (v1256[0]) {
      case 'Bob_checkStatus0_104': {
        const v1259 = v1256[1];
        undefined /* setApiDetails */;
        const v1264 = stdlib.addressEq(v1255, v1088);
        const v1265 = v1264 ? false : true;
        stdlib.assert(v1265, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:98:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:33:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
          msg: 'Not Deployer',
          who: 'Alice'
          });
        const v1267 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1255), null);
        let v1268;
        switch (v1267[0]) {
          case 'None': {
            const v1269 = v1267[1];
            v1268 = false;
            
            break;
            }
          case 'Some': {
            const v1270 = v1267[1];
            v1268 = true;
            
            break;
            }
          }
        stdlib.assert(v1268, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:99:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:33:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
          msg: 'You have not made any draw yet!',
          who: 'Alice'
          });
        const v1272 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1255), null);
        let v1273;
        switch (v1272[0]) {
          case 'None': {
            const v1274 = v1272[1];
            v1273 = false;
            
            break;
            }
          case 'Some': {
            const v1275 = v1272[1];
            v1273 = true;
            
            break;
            }
          }
        const v1276 = v1273 ? false : true;
        stdlib.assert(v1276, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:100:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:33:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
          msg: 'You have checked your status already',
          who: 'Alice'
          });
        ;
        let v1301;
        switch (v1267[0]) {
          case 'None': {
            const v1302 = v1267[1];
            v1301 = false;
            
            break;
            }
          case 'Some': {
            const v1303 = v1267[1];
            v1301 = true;
            
            break;
            }
          }
        stdlib.assert(v1301, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:99:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:102:30:application call to [unknown function] (defined at: ./index.rsh:102:30:function exp)'],
          msg: 'You have not made any draw yet!',
          who: 'Alice'
          });
        let v1306;
        switch (v1272[0]) {
          case 'None': {
            const v1307 = v1272[1];
            v1306 = false;
            
            break;
            }
          case 'Some': {
            const v1308 = v1272[1];
            v1306 = true;
            
            break;
            }
          }
        const v1309 = v1306 ? false : true;
        stdlib.assert(v1309, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:100:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:102:30:application call to [unknown function] (defined at: ./index.rsh:102:30:function exp)'],
          msg: 'You have checked your status already',
          who: 'Alice'
          });
        const v1311 = stdlib.eq(v1131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
        if (v1311) {
          const v1328 = [true, false];
          await txn5.getOutput('Bob_checkStatus', 'v1328', ctc12, v1328);
          const v1336 = stdlib.add(v1129, stdlib.checkedBigNumberify('./index.rsh:115:81:decimal', stdlib.UInt_max, '1'));
          const cv1128 = v1128;
          const cv1129 = v1336;
          const cv1130 = v1130;
          const cv1131 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
          const cv1132 = v1257;
          const cv1138 = v1138;
          const cv1139 = v1139;
          
          v1128 = cv1128;
          v1129 = cv1129;
          v1130 = cv1130;
          v1131 = cv1131;
          v1132 = cv1132;
          v1138 = cv1138;
          v1139 = cv1139;
          
          continue;}
        else {
          const v1313 = [false, false];
          await txn5.getOutput('Bob_checkStatus', 'v1313', ctc12, v1313);
          const cv1128 = v1128;
          const cv1129 = v1129;
          const cv1130 = v1130;
          const cv1131 = v1131;
          const cv1132 = v1257;
          const cv1138 = v1138;
          const cv1139 = v1139;
          
          v1128 = cv1128;
          v1129 = cv1129;
          v1130 = cv1130;
          v1131 = cv1131;
          v1132 = cv1132;
          v1138 = cv1138;
          v1139 = cv1139;
          
          continue;}
        break;
        }
      case 'Bob_drawRaffleTicket0_104': {
        const v1398 = v1256[1];
        undefined /* setApiDetails */;
        const v1419 = stdlib.addressEq(v1255, v1088);
        const v1420 = v1419 ? false : true;
        stdlib.assert(v1420, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:78:42:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
          msg: 'Not Deployer',
          who: 'Alice'
          });
        const v1422 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1255), null);
        let v1423;
        switch (v1422[0]) {
          case 'None': {
            const v1424 = v1422[1];
            v1423 = true;
            
            break;
            }
          case 'Some': {
            const v1425 = v1422[1];
            v1423 = false;
            
            break;
            }
          }
        stdlib.assert(v1423, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:80:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:78:42:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
          msg: 'Already made a draw',
          who: 'Alice'
          });
        ;
        const v1483 = v1398[stdlib.checkedBigNumberify('./index.rsh:78:12:spread', stdlib.UInt_max, '0')];
        let v1488;
        switch (v1422[0]) {
          case 'None': {
            const v1489 = v1422[1];
            v1488 = true;
            
            break;
            }
          case 'Some': {
            const v1490 = v1422[1];
            v1488 = false;
            
            break;
            }
          }
        stdlib.assert(v1488, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:80:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:82:31:application call to [unknown function] (defined at: ./index.rsh:82:31:function exp)'],
          msg: 'Already made a draw',
          who: 'Alice'
          });
        const v1493 = null;
        await txn5.getOutput('Bob_drawRaffleTicket', 'v1493', ctc0, v1493);
        await stdlib.mapSet(map0, v1255, v1483);
        stdlib.protect(ctc0, await interact.getRegInfo(v1255, v1483), {
          at: './index.rsh:87:36:application',
          fs: ['at ./index.rsh:87:36:application call to [unknown function] (defined at: ./index.rsh:87:36:function exp)', 'at ./index.rsh:87:36:application call to "liftedInteract" (defined at: ./index.rsh:87:36:application)', 'at ./index.rsh:82:31:application call to [unknown function] (defined at: ./index.rsh:82:31:function exp)'],
          msg: 'getRegInfo',
          who: 'Alice'
          });
        
        const v1501 = stdlib.add(v1130, stdlib.checkedBigNumberify('./index.rsh:89:29:decimal', stdlib.UInt_max, '1'));
        const v1502 = stdlib.eq(v1501, v1090);
        if (v1502) {
          const cv1128 = v1088;
          const cv1129 = v1129;
          const cv1130 = v1501;
          const cv1131 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
          const cv1132 = v1257;
          const cv1138 = v1138;
          const cv1139 = v1139;
          
          v1128 = cv1128;
          v1129 = cv1129;
          v1130 = cv1130;
          v1131 = cv1131;
          v1132 = cv1132;
          v1138 = cv1138;
          v1139 = cv1139;
          
          continue;}
        else {
          const cv1128 = v1088;
          const cv1129 = v1129;
          const cv1130 = v1501;
          const cv1131 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
          const cv1132 = v1257;
          const cv1138 = v1138;
          const cv1139 = v1139;
          
          v1128 = cv1128;
          v1129 = cv1129;
          v1130 = cv1130;
          v1131 = cv1131;
          v1132 = cv1132;
          v1138 = cv1138;
          v1139 = cv1139;
          
          continue;}
        break;
        }
      case 'Bob_getNumberOfTicketsAvailable0_104': {
        const v1537 = v1256[1];
        undefined /* setApiDetails */;
        const v1567 = stdlib.addressEq(v1255, v1088);
        const v1568 = v1567 ? false : true;
        stdlib.assert(v1568, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:70:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:69:49:application call to [unknown function] (defined at: ./index.rsh:69:49:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:69:49:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
          msg: 'Not deployer',
          who: 'Alice'
          });
        ;
        await txn5.getOutput('Bob_getNumberOfTicketsAvailable', 'v1090', ctc1, v1090);
        const cv1128 = v1088;
        const cv1129 = v1129;
        const cv1130 = v1130;
        const cv1131 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        const cv1132 = v1257;
        const cv1138 = v1138;
        const cv1139 = v1139;
        
        v1128 = cv1128;
        v1129 = cv1129;
        v1130 = cv1130;
        v1131 = cv1131;
        v1132 = cv1132;
        v1138 = cv1138;
        v1139 = cv1139;
        
        continue;
        break;
        }
      case 'Bob_subscribeToNFT0_104': {
        const v1676 = v1256[1];
        undefined /* setApiDetails */;
        const v1710 = stdlib.addressEq(v1255, v1088);
        const v1711 = v1710 ? false : true;
        stdlib.assert(v1711, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./index.rsh:61:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:36:application call to [unknown function] (defined at: ./index.rsh:60:36:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:60:36:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
          msg: 'Not deployer',
          who: 'Alice'
          });
        ;
        await txn5.getOutput('Bob_subscribeToNFT', 'v1089', ctc4, v1089);
        const cv1128 = v1088;
        const cv1129 = v1129;
        const cv1130 = v1130;
        const cv1131 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
        const cv1132 = v1257;
        const cv1138 = v1138;
        const cv1139 = v1139;
        
        v1128 = cv1128;
        v1129 = cv1129;
        v1130 = cv1130;
        v1131 = cv1131;
        v1132 = cv1132;
        v1138 = cv1138;
        v1139 = cv1139;
        
        continue;
        break;
        }
      }
    
    }
  const v1815 = stdlib.addressEq(v1128, v1088);
  if (v1815) {
    stdlib.protect(ctc0, await interact.informLackOfWinner(), {
      at: './index.rsh:123:38:application',
      fs: ['at ./index.rsh:123:38:application call to [unknown function] (defined at: ./index.rsh:123:38:function exp)', 'at ./index.rsh:123:38:application call to "liftedInteract" (defined at: ./index.rsh:123:38:application)'],
      msg: 'informLackOfWinner',
      who: 'Alice'
      });
    
    }
  else {
    stdlib.protect(ctc0, await interact.displayWinner(v1128), {
      at: './index.rsh:126:33:application',
      fs: ['at ./index.rsh:126:33:application call to [unknown function] (defined at: ./index.rsh:126:33:function exp)', 'at ./index.rsh:126:33:application call to "liftedInteract" (defined at: ./index.rsh:126:33:application)'],
      msg: 'displayWinner',
      who: 'Alice'
      });
    
    }
  const txn5 = await (ctc.sendrecv({
    args: [v1088, v1089, v1128, v1138, v1139, v1815],
    evt_cnt: 0,
    funcNum: 5,
    lct: v1132,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:129:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn5) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [], secs: v1820, time: v1819, didSend: v1020, from: v1818 } = txn5;
      
      ;
      const v1822 = v1138[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
      const v1823 = v1822[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
      sim_r.txns.push({
        kind: 'from',
        to: v1128,
        tok: v1089
        });
      sim_r.txns.push({
        kind: 'from',
        to: v1088,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: v1089
        })
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc13, ctc4, ctc13, ctc15, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v1820, time: v1819, didSend: v1020, from: v1818 } = txn5;
  ;
  const v1821 = stdlib.addressEq(v1088, v1818);
  stdlib.assert(v1821, {
    at: './index.rsh:129:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v1822 = v1138[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
  const v1823 = v1822[stdlib.checkedBigNumberify('./index.rsh:131:19:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  
  
  
  
  
  
  };
export async function _Bob_checkStatus7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_checkStatus7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_checkStatus7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Bob_checkStatus0_104: ctc9,
    Bob_drawRaffleTicket0_104: ctc10,
    Bob_getNumberOfTicketsAvailable0_104: ctc9,
    Bob_subscribeToNFT0_104: ctc9
    });
  const ctc12 = stdlib.T_Tuple([ctc6, ctc6]);
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v1088, v1089, v1090, v1128, v1129, v1130, v1131, v1138, v1139] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v1200 = ctc.selfAddress();
  const v1202 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:97:33:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to "runBob_checkStatus0_104" (defined at: ./index.rsh:97:12:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'in',
    who: 'Bob_checkStatus'
    });
  const v1203 = stdlib.addressEq(v1200, v1088);
  const v1204 = v1203 ? false : true;
  stdlib.assert(v1204, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:98:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:33:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to "runBob_checkStatus0_104" (defined at: ./index.rsh:97:12:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_checkStatus'
    });
  const v1206 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1200), null);
  let v1207;
  switch (v1206[0]) {
    case 'None': {
      const v1208 = v1206[1];
      v1207 = false;
      
      break;
      }
    case 'Some': {
      const v1209 = v1206[1];
      v1207 = true;
      
      break;
      }
    }
  stdlib.assert(v1207, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:99:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:33:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to "runBob_checkStatus0_104" (defined at: ./index.rsh:97:12:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'You have not made any draw yet!',
    who: 'Bob_checkStatus'
    });
  const v1211 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1200), null);
  let v1212;
  switch (v1211[0]) {
    case 'None': {
      const v1213 = v1211[1];
      v1212 = false;
      
      break;
      }
    case 'Some': {
      const v1214 = v1211[1];
      v1212 = true;
      
      break;
      }
    }
  const v1215 = v1212 ? false : true;
  stdlib.assert(v1215, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:100:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:33:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to "runBob_checkStatus0_104" (defined at: ./index.rsh:97:12:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'You have checked your status already',
    who: 'Bob_checkStatus'
    });
  const v1220 = ['Bob_checkStatus0_104', v1202];
  
  let v1227;
  switch (v1206[0]) {
    case 'None': {
      const v1228 = v1206[1];
      v1227 = false;
      
      break;
      }
    case 'Some': {
      const v1229 = v1206[1];
      v1227 = true;
      
      break;
      }
    }
  stdlib.assert(v1227, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:99:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:33:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'You have not made any draw yet!',
    who: 'Bob_checkStatus'
    });
  let v1232;
  switch (v1211[0]) {
    case 'None': {
      const v1233 = v1211[1];
      v1232 = false;
      
      break;
      }
    case 'Some': {
      const v1234 = v1211[1];
      v1232 = true;
      
      break;
      }
    }
  const v1235 = v1232 ? false : true;
  stdlib.assert(v1235, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:100:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:33:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'You have checked your status already',
    who: 'Bob_checkStatus'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1088, v1089, v1090, v1128, v1129, v1130, v1131, v1138, v1139, v1220],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:102:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1256], secs: v1258, time: v1257, didSend: v790, from: v1255 } = txn1;
      
      switch (v1256[0]) {
        case 'Bob_checkStatus0_104': {
          const v1259 = v1256[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_checkStatus"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1255), null);
          stdlib.protect(map1_ctc, await stdlib.simMapRef(sim_r, 1, v1255), null);
          ;
          const v1311 = stdlib.eq(v1131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
          if (v1311) {
            const v1328 = [true, false];
            const v1329 = await txn1.getOutput('Bob_checkStatus', 'v1328', ctc12, v1328);
            
            const v1336 = stdlib.add(v1129, stdlib.checkedBigNumberify('./index.rsh:115:81:decimal', stdlib.UInt_max, '1'));
            const v3998 = v1128;
            const v3999 = v1336;
            const v4000 = v1130;
            const v4001 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
            const v4003 = v1138;
            const v4004 = v1139;
            const v4005 = stdlib.lt(v1130, v1090);
            const v4010 = stdlib.lt(v1336, v1090);
            const v4011 = v4005 ? v4010 : false;
            if (v4011) {
              sim_r.isHalt = false;
              }
            else {
              const v4012 = stdlib.addressEq(v1128, v1088);
              sim_r.isHalt = false;
              }}
          else {
            const v1313 = [false, false];
            const v1314 = await txn1.getOutput('Bob_checkStatus', 'v1313', ctc12, v1313);
            
            const v4020 = v1128;
            const v4021 = v1129;
            const v4022 = v1130;
            const v4023 = v1131;
            const v4025 = v1138;
            const v4026 = v1139;
            const v4027 = stdlib.lt(v1130, v1090);
            const v4028 = stdlib.eq(v1131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
            const v4031 = v4027 ? v4028 : false;
            const v4032 = stdlib.lt(v1129, v1090);
            const v4033 = v4031 ? v4032 : false;
            if (v4033) {
              sim_r.isHalt = false;
              }
            else {
              const v4034 = stdlib.addressEq(v1128, v1088);
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Bob_drawRaffleTicket0_104': {
          const v1398 = v1256[1];
          
          break;
          }
        case 'Bob_getNumberOfTicketsAvailable0_104': {
          const v1537 = v1256[1];
          
          break;
          }
        case 'Bob_subscribeToNFT0_104': {
          const v1676 = v1256[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1256], secs: v1258, time: v1257, didSend: v790, from: v1255 } = txn1;
  switch (v1256[0]) {
    case 'Bob_checkStatus0_104': {
      const v1259 = v1256[1];
      undefined /* setApiDetails */;
      const v1264 = stdlib.addressEq(v1255, v1088);
      const v1265 = v1264 ? false : true;
      stdlib.assert(v1265, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:98:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:33:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
        msg: 'Not Deployer',
        who: 'Bob_checkStatus'
        });
      const v1267 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1255), null);
      let v1268;
      switch (v1267[0]) {
        case 'None': {
          const v1269 = v1267[1];
          v1268 = false;
          
          break;
          }
        case 'Some': {
          const v1270 = v1267[1];
          v1268 = true;
          
          break;
          }
        }
      stdlib.assert(v1268, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:99:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:33:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
        msg: 'You have not made any draw yet!',
        who: 'Bob_checkStatus'
        });
      const v1272 = stdlib.protect(map1_ctc, await stdlib.mapRef(map1, v1255), null);
      let v1273;
      switch (v1272[0]) {
        case 'None': {
          const v1274 = v1272[1];
          v1273 = false;
          
          break;
          }
        case 'Some': {
          const v1275 = v1272[1];
          v1273 = true;
          
          break;
          }
        }
      const v1276 = v1273 ? false : true;
      stdlib.assert(v1276, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:100:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:97:33:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:97:33:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
        msg: 'You have checked your status already',
        who: 'Bob_checkStatus'
        });
      ;
      let v1301;
      switch (v1267[0]) {
        case 'None': {
          const v1302 = v1267[1];
          v1301 = false;
          
          break;
          }
        case 'Some': {
          const v1303 = v1267[1];
          v1301 = true;
          
          break;
          }
        }
      stdlib.assert(v1301, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:99:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:102:30:application call to [unknown function] (defined at: ./index.rsh:102:30:function exp)'],
        msg: 'You have not made any draw yet!',
        who: 'Bob_checkStatus'
        });
      let v1306;
      switch (v1272[0]) {
        case 'None': {
          const v1307 = v1272[1];
          v1306 = false;
          
          break;
          }
        case 'Some': {
          const v1308 = v1272[1];
          v1306 = true;
          
          break;
          }
        }
      const v1309 = v1306 ? false : true;
      stdlib.assert(v1309, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:100:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:102:30:application call to [unknown function] (defined at: ./index.rsh:102:30:function exp)'],
        msg: 'You have checked your status already',
        who: 'Bob_checkStatus'
        });
      const v1311 = stdlib.eq(v1131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '3'));
      if (v1311) {
        const v1328 = [true, false];
        const v1329 = await txn1.getOutput('Bob_checkStatus', 'v1328', ctc12, v1328);
        if (v790) {
          stdlib.protect(ctc0, await interact.out(v1259, v1329), {
            at: './index.rsh:97:13:application',
            fs: ['at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)', 'at ./index.rsh:114:22:application call to "resolve" (defined at: ./index.rsh:102:30:function exp)', 'at ./index.rsh:102:30:application call to [unknown function] (defined at: ./index.rsh:102:30:function exp)'],
            msg: 'out',
            who: 'Bob_checkStatus'
            });
          }
        else {
          }
        
        const v1336 = stdlib.add(v1129, stdlib.checkedBigNumberify('./index.rsh:115:81:decimal', stdlib.UInt_max, '1'));
        const v3998 = v1128;
        const v3999 = v1336;
        const v4000 = v1130;
        const v4001 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
        const v4003 = v1138;
        const v4004 = v1139;
        const v4005 = stdlib.lt(v1130, v1090);
        const v4010 = stdlib.lt(v1336, v1090);
        const v4011 = v4005 ? v4010 : false;
        if (v4011) {
          return;
          }
        else {
          const v4012 = stdlib.addressEq(v1128, v1088);
          return;
          }}
      else {
        const v1313 = [false, false];
        const v1314 = await txn1.getOutput('Bob_checkStatus', 'v1313', ctc12, v1313);
        if (v790) {
          stdlib.protect(ctc0, await interact.out(v1259, v1314), {
            at: './index.rsh:97:13:application',
            fs: ['at ./index.rsh:97:13:application call to [unknown function] (defined at: ./index.rsh:97:13:function exp)', 'at ./index.rsh:104:20:application call to "resolve" (defined at: ./index.rsh:102:30:function exp)', 'at ./index.rsh:102:30:application call to [unknown function] (defined at: ./index.rsh:102:30:function exp)'],
            msg: 'out',
            who: 'Bob_checkStatus'
            });
          }
        else {
          }
        
        const v4020 = v1128;
        const v4021 = v1129;
        const v4022 = v1130;
        const v4023 = v1131;
        const v4025 = v1138;
        const v4026 = v1139;
        const v4027 = stdlib.lt(v1130, v1090);
        const v4028 = stdlib.eq(v1131, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
        const v4031 = v4027 ? v4028 : false;
        const v4032 = stdlib.lt(v1129, v1090);
        const v4033 = v4031 ? v4032 : false;
        if (v4033) {
          return;
          }
        else {
          const v4034 = stdlib.addressEq(v1128, v1088);
          return;
          }}
      break;
      }
    case 'Bob_drawRaffleTicket0_104': {
      const v1398 = v1256[1];
      return;
      break;
      }
    case 'Bob_getNumberOfTicketsAvailable0_104': {
      const v1537 = v1256[1];
      return;
      break;
      }
    case 'Bob_subscribeToNFT0_104': {
      const v1676 = v1256[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_drawRaffleTicket7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_drawRaffleTicket7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_drawRaffleTicket7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([ctc1]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Data({
    Bob_checkStatus0_104: ctc10,
    Bob_drawRaffleTicket0_104: ctc9,
    Bob_getNumberOfTicketsAvailable0_104: ctc10,
    Bob_subscribeToNFT0_104: ctc10
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v1088, v1089, v1090, v1128, v1129, v1130, v1131, v1138, v1139] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v1180 = ctc.selfAddress();
  const v1182 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:78:42:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to "runBob_drawRaffleTicket0_104" (defined at: ./index.rsh:78:12:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'in',
    who: 'Bob_drawRaffleTicket'
    });
  const v1185 = stdlib.addressEq(v1180, v1088);
  const v1186 = v1185 ? false : true;
  stdlib.assert(v1186, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:78:42:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to "runBob_drawRaffleTicket0_104" (defined at: ./index.rsh:78:12:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'Not Deployer',
    who: 'Bob_drawRaffleTicket'
    });
  const v1188 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1180), null);
  let v1189;
  switch (v1188[0]) {
    case 'None': {
      const v1190 = v1188[1];
      v1189 = true;
      
      break;
      }
    case 'Some': {
      const v1191 = v1188[1];
      v1189 = false;
      
      break;
      }
    }
  stdlib.assert(v1189, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:78:42:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to "runBob_drawRaffleTicket0_104" (defined at: ./index.rsh:78:12:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'Already made a draw',
    who: 'Bob_drawRaffleTicket'
    });
  const v1198 = ['Bob_drawRaffleTicket0_104', v1182];
  
  let v1243;
  switch (v1188[0]) {
    case 'None': {
      const v1244 = v1188[1];
      v1243 = true;
      
      break;
      }
    case 'Some': {
      const v1245 = v1188[1];
      v1243 = false;
      
      break;
      }
    }
  stdlib.assert(v1243, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:80:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:78:42:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'Already made a draw',
    who: 'Bob_drawRaffleTicket'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v1088, v1089, v1090, v1128, v1129, v1130, v1131, v1138, v1139, v1198],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:82:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1256], secs: v1258, time: v1257, didSend: v790, from: v1255 } = txn1;
      
      switch (v1256[0]) {
        case 'Bob_checkStatus0_104': {
          const v1259 = v1256[1];
          
          break;
          }
        case 'Bob_drawRaffleTicket0_104': {
          const v1398 = v1256[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_drawRaffleTicket"
            });
          stdlib.protect(map0_ctc, await stdlib.simMapRef(sim_r, 0, v1255), null);
          ;
          const v1483 = v1398[stdlib.checkedBigNumberify('./index.rsh:78:12:spread', stdlib.UInt_max, '0')];
          const v1493 = null;
          const v1494 = await txn1.getOutput('Bob_drawRaffleTicket', 'v1493', ctc0, v1493);
          
          await stdlib.simMapSet(sim_r, 0, v1255, v1483);
          const v1501 = stdlib.add(v1130, stdlib.checkedBigNumberify('./index.rsh:89:29:decimal', stdlib.UInt_max, '1'));
          const v1502 = stdlib.eq(v1501, v1090);
          if (v1502) {
            const v4174 = v1088;
            const v4175 = v1129;
            const v4176 = v1501;
            const v4177 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
            const v4179 = v1138;
            const v4180 = v1139;
            const v4181 = stdlib.lt(v1501, v1090);
            const v4186 = stdlib.lt(v1129, v1090);
            const v4187 = v4181 ? v4186 : false;
            if (v4187) {
              sim_r.isHalt = false;
              }
            else {
              const v4188 = true;
              sim_r.isHalt = false;
              }}
          else {
            const v4196 = v1088;
            const v4197 = v1129;
            const v4198 = v1501;
            const v4199 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
            const v4201 = v1138;
            const v4202 = v1139;
            const v4203 = stdlib.lt(v1501, v1090);
            const v4208 = stdlib.lt(v1129, v1090);
            const v4209 = v4203 ? v4208 : false;
            if (v4209) {
              sim_r.isHalt = false;
              }
            else {
              const v4210 = true;
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Bob_getNumberOfTicketsAvailable0_104': {
          const v1537 = v1256[1];
          
          break;
          }
        case 'Bob_subscribeToNFT0_104': {
          const v1676 = v1256[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1256], secs: v1258, time: v1257, didSend: v790, from: v1255 } = txn1;
  switch (v1256[0]) {
    case 'Bob_checkStatus0_104': {
      const v1259 = v1256[1];
      return;
      break;
      }
    case 'Bob_drawRaffleTicket0_104': {
      const v1398 = v1256[1];
      undefined /* setApiDetails */;
      const v1419 = stdlib.addressEq(v1255, v1088);
      const v1420 = v1419 ? false : true;
      stdlib.assert(v1420, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:79:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:78:42:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
        msg: 'Not Deployer',
        who: 'Bob_drawRaffleTicket'
        });
      const v1422 = stdlib.protect(map0_ctc, await stdlib.mapRef(map0, v1255), null);
      let v1423;
      switch (v1422[0]) {
        case 'None': {
          const v1424 = v1422[1];
          v1423 = true;
          
          break;
          }
        case 'Some': {
          const v1425 = v1422[1];
          v1423 = false;
          
          break;
          }
        }
      stdlib.assert(v1423, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:78:42:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:78:42:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
        msg: 'Already made a draw',
        who: 'Bob_drawRaffleTicket'
        });
      ;
      const v1483 = v1398[stdlib.checkedBigNumberify('./index.rsh:78:12:spread', stdlib.UInt_max, '0')];
      let v1488;
      switch (v1422[0]) {
        case 'None': {
          const v1489 = v1422[1];
          v1488 = true;
          
          break;
          }
        case 'Some': {
          const v1490 = v1422[1];
          v1488 = false;
          
          break;
          }
        }
      stdlib.assert(v1488, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:80:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:82:31:application call to [unknown function] (defined at: ./index.rsh:82:31:function exp)'],
        msg: 'Already made a draw',
        who: 'Bob_drawRaffleTicket'
        });
      const v1493 = null;
      const v1494 = await txn1.getOutput('Bob_drawRaffleTicket', 'v1493', ctc0, v1493);
      if (v790) {
        stdlib.protect(ctc0, await interact.out(v1398, v1494), {
          at: './index.rsh:78:13:application',
          fs: ['at ./index.rsh:78:13:application call to [unknown function] (defined at: ./index.rsh:78:13:function exp)', 'at ./index.rsh:83:18:application call to "resolve" (defined at: ./index.rsh:82:31:function exp)', 'at ./index.rsh:82:31:application call to [unknown function] (defined at: ./index.rsh:82:31:function exp)'],
          msg: 'out',
          who: 'Bob_drawRaffleTicket'
          });
        }
      else {
        }
      
      await stdlib.mapSet(map0, v1255, v1483);
      const v1501 = stdlib.add(v1130, stdlib.checkedBigNumberify('./index.rsh:89:29:decimal', stdlib.UInt_max, '1'));
      const v1502 = stdlib.eq(v1501, v1090);
      if (v1502) {
        const v4174 = v1088;
        const v4175 = v1129;
        const v4176 = v1501;
        const v4177 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3');
        const v4179 = v1138;
        const v4180 = v1139;
        const v4181 = stdlib.lt(v1501, v1090);
        const v4186 = stdlib.lt(v1129, v1090);
        const v4187 = v4181 ? v4186 : false;
        if (v4187) {
          return;
          }
        else {
          const v4188 = true;
          return;
          }}
      else {
        const v4196 = v1088;
        const v4197 = v1129;
        const v4198 = v1501;
        const v4199 = stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2');
        const v4201 = v1138;
        const v4202 = v1139;
        const v4203 = stdlib.lt(v1501, v1090);
        const v4208 = stdlib.lt(v1129, v1090);
        const v4209 = v4203 ? v4208 : false;
        if (v4209) {
          return;
          }
        else {
          const v4210 = true;
          return;
          }}
      break;
      }
    case 'Bob_getNumberOfTicketsAvailable0_104': {
      const v1537 = v1256[1];
      return;
      break;
      }
    case 'Bob_subscribeToNFT0_104': {
      const v1676 = v1256[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_getNumberOfTicketsAvailable7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_getNumberOfTicketsAvailable7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_getNumberOfTicketsAvailable7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Bob_checkStatus0_104: ctc9,
    Bob_drawRaffleTicket0_104: ctc10,
    Bob_getNumberOfTicketsAvailable0_104: ctc9,
    Bob_subscribeToNFT0_104: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v1088, v1089, v1090, v1128, v1129, v1130, v1131, v1138, v1139] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v1169 = ctc.selfAddress();
  const v1171 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:69:49:application call to [unknown function] (defined at: ./index.rsh:69:49:function exp)', 'at ./index.rsh:56:19:application call to "runBob_getNumberOfTicketsAvailable0_104" (defined at: ./index.rsh:69:12:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'in',
    who: 'Bob_getNumberOfTicketsAvailable'
    });
  const v1172 = stdlib.addressEq(v1169, v1088);
  const v1173 = v1172 ? false : true;
  stdlib.assert(v1173, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:70:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:69:49:application call to [unknown function] (defined at: ./index.rsh:69:49:function exp)', 'at ./index.rsh:56:19:application call to "runBob_getNumberOfTicketsAvailable0_104" (defined at: ./index.rsh:69:12:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'Not deployer',
    who: 'Bob_getNumberOfTicketsAvailable'
    });
  const v1178 = ['Bob_getNumberOfTicketsAvailable0_104', v1171];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1088, v1089, v1090, v1128, v1129, v1130, v1131, v1138, v1139, v1178],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:72:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1256], secs: v1258, time: v1257, didSend: v790, from: v1255 } = txn1;
      
      switch (v1256[0]) {
        case 'Bob_checkStatus0_104': {
          const v1259 = v1256[1];
          
          break;
          }
        case 'Bob_drawRaffleTicket0_104': {
          const v1398 = v1256[1];
          
          break;
          }
        case 'Bob_getNumberOfTicketsAvailable0_104': {
          const v1537 = v1256[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_getNumberOfTicketsAvailable"
            });
          ;
          const v1660 = await txn1.getOutput('Bob_getNumberOfTicketsAvailable', 'v1090', ctc1, v1090);
          
          const v4350 = v1088;
          const v4351 = v1129;
          const v4352 = v1130;
          const v4353 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const v4355 = v1138;
          const v4356 = v1139;
          const v4357 = stdlib.lt(v1130, v1090);
          const v4362 = stdlib.lt(v1129, v1090);
          const v4363 = v4357 ? v4362 : false;
          if (v4363) {
            sim_r.isHalt = false;
            }
          else {
            const v4364 = true;
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bob_subscribeToNFT0_104': {
          const v1676 = v1256[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1256], secs: v1258, time: v1257, didSend: v790, from: v1255 } = txn1;
  switch (v1256[0]) {
    case 'Bob_checkStatus0_104': {
      const v1259 = v1256[1];
      return;
      break;
      }
    case 'Bob_drawRaffleTicket0_104': {
      const v1398 = v1256[1];
      return;
      break;
      }
    case 'Bob_getNumberOfTicketsAvailable0_104': {
      const v1537 = v1256[1];
      undefined /* setApiDetails */;
      const v1567 = stdlib.addressEq(v1255, v1088);
      const v1568 = v1567 ? false : true;
      stdlib.assert(v1568, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:70:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:69:49:application call to [unknown function] (defined at: ./index.rsh:69:49:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:69:49:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
        msg: 'Not deployer',
        who: 'Bob_getNumberOfTicketsAvailable'
        });
      ;
      const v1660 = await txn1.getOutput('Bob_getNumberOfTicketsAvailable', 'v1090', ctc1, v1090);
      if (v790) {
        stdlib.protect(ctc0, await interact.out(v1537, v1660), {
          at: './index.rsh:69:13:application',
          fs: ['at ./index.rsh:69:13:application call to [unknown function] (defined at: ./index.rsh:69:13:function exp)', 'at ./index.rsh:73:18:application call to "resolve" (defined at: ./index.rsh:72:30:function exp)', 'at ./index.rsh:72:30:application call to [unknown function] (defined at: ./index.rsh:72:30:function exp)'],
          msg: 'out',
          who: 'Bob_getNumberOfTicketsAvailable'
          });
        }
      else {
        }
      
      const v4350 = v1088;
      const v4351 = v1129;
      const v4352 = v1130;
      const v4353 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v4355 = v1138;
      const v4356 = v1139;
      const v4357 = stdlib.lt(v1130, v1090);
      const v4362 = stdlib.lt(v1129, v1090);
      const v4363 = v4357 ? v4362 : false;
      if (v4363) {
        return;
        }
      else {
        const v4364 = true;
        return;
        }
      break;
      }
    case 'Bob_subscribeToNFT0_104': {
      const v1676 = v1256[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bob_subscribeToNFT7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bob_subscribeToNFT7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bob_subscribeToNFT7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Null;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Data({
    None: ctc0,
    Some: ctc1
    });
  const ctc3 = stdlib.T_Data({
    None: ctc0,
    Some: ctc0
    });
  const ctc4 = stdlib.T_Address;
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Tuple([]);
  const ctc10 = stdlib.T_Tuple([ctc1]);
  const ctc11 = stdlib.T_Data({
    Bob_checkStatus0_104: ctc9,
    Bob_drawRaffleTicket0_104: ctc10,
    Bob_getNumberOfTicketsAvailable0_104: ctc9,
    Bob_subscribeToNFT0_104: ctc9
    });
  
  const map0_ctc = ctc2;
  const map0 = stdlib.newMap({
    ctc: ctc,
    idx: 0,
    isAPI: true,
    ty: map0_ctc
    });
  
  const map1_ctc = ctc3;
  const map1 = stdlib.newMap({
    ctc: ctc,
    idx: 1,
    isAPI: true,
    ty: map1_ctc
    });
  
  
  const [v1088, v1089, v1090, v1128, v1129, v1130, v1131, v1138, v1139] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1]);
  const v1158 = ctc.selfAddress();
  const v1160 = stdlib.protect(ctc9, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:60:36:application call to [unknown function] (defined at: ./index.rsh:60:36:function exp)', 'at ./index.rsh:56:19:application call to "runBob_subscribeToNFT0_104" (defined at: ./index.rsh:60:12:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'in',
    who: 'Bob_subscribeToNFT'
    });
  const v1161 = stdlib.addressEq(v1158, v1088);
  const v1162 = v1161 ? false : true;
  stdlib.assert(v1162, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./index.rsh:61:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:36:application call to [unknown function] (defined at: ./index.rsh:60:36:function exp)', 'at ./index.rsh:56:19:application call to "runBob_subscribeToNFT0_104" (defined at: ./index.rsh:60:12:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
    msg: 'Not deployer',
    who: 'Bob_subscribeToNFT'
    });
  const v1167 = ['Bob_subscribeToNFT0_104', v1160];
  
  const txn1 = await (ctc.sendrecv({
    args: [v1088, v1089, v1090, v1128, v1129, v1130, v1131, v1138, v1139, v1167],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./index.rsh:63:17:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      stdlib.simMapDupe(sim_r, 0, map0);
      stdlib.simMapDupe(sim_r, 1, map1);
      
      const {data: [v1256], secs: v1258, time: v1257, didSend: v790, from: v1255 } = txn1;
      
      switch (v1256[0]) {
        case 'Bob_checkStatus0_104': {
          const v1259 = v1256[1];
          
          break;
          }
        case 'Bob_drawRaffleTicket0_104': {
          const v1398 = v1256[1];
          
          break;
          }
        case 'Bob_getNumberOfTicketsAvailable0_104': {
          const v1537 = v1256[1];
          
          break;
          }
        case 'Bob_subscribeToNFT0_104': {
          const v1676 = v1256[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bob_subscribeToNFT"
            });
          ;
          const v1809 = await txn1.getOutput('Bob_subscribeToNFT', 'v1089', ctc5, v1089);
          
          const v4504 = v1088;
          const v4505 = v1129;
          const v4506 = v1130;
          const v4507 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
          const v4509 = v1138;
          const v4510 = v1139;
          const v4511 = stdlib.lt(v1130, v1090);
          const v4516 = stdlib.lt(v1129, v1090);
          const v4517 = v4511 ? v4516 : false;
          if (v4517) {
            sim_r.isHalt = false;
            }
          else {
            const v4518 = true;
            sim_r.isHalt = false;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc5, ctc1, ctc4, ctc1, ctc1, ctc1, ctc8, ctc1, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v1256], secs: v1258, time: v1257, didSend: v790, from: v1255 } = txn1;
  switch (v1256[0]) {
    case 'Bob_checkStatus0_104': {
      const v1259 = v1256[1];
      return;
      break;
      }
    case 'Bob_drawRaffleTicket0_104': {
      const v1398 = v1256[1];
      return;
      break;
      }
    case 'Bob_getNumberOfTicketsAvailable0_104': {
      const v1537 = v1256[1];
      return;
      break;
      }
    case 'Bob_subscribeToNFT0_104': {
      const v1676 = v1256[1];
      undefined /* setApiDetails */;
      const v1710 = stdlib.addressEq(v1255, v1088);
      const v1711 = v1710 ? false : true;
      stdlib.assert(v1711, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./index.rsh:61:14:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./index.rsh:60:36:application call to [unknown function] (defined at: ./index.rsh:60:36:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:60:36:function exp)', 'at ./index.rsh:56:19:application call to [unknown function] (defined at: ./index.rsh:56:19:function exp)'],
        msg: 'Not deployer',
        who: 'Bob_subscribeToNFT'
        });
      ;
      const v1809 = await txn1.getOutput('Bob_subscribeToNFT', 'v1089', ctc5, v1089);
      if (v790) {
        stdlib.protect(ctc0, await interact.out(v1676, v1809), {
          at: './index.rsh:60:13:application',
          fs: ['at ./index.rsh:60:13:application call to [unknown function] (defined at: ./index.rsh:60:13:function exp)', 'at ./index.rsh:64:18:application call to "resolve" (defined at: ./index.rsh:63:30:function exp)', 'at ./index.rsh:63:30:application call to [unknown function] (defined at: ./index.rsh:63:30:function exp)'],
          msg: 'out',
          who: 'Bob_subscribeToNFT'
          });
        }
      else {
        }
      
      const v4504 = v1088;
      const v4505 = v1129;
      const v4506 = v1130;
      const v4507 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2');
      const v4509 = v1138;
      const v4510 = v1139;
      const v4511 = stdlib.lt(v1130, v1090);
      const v4516 = stdlib.lt(v1129, v1090);
      const v4517 = v4511 ? v4516 : false;
      if (v4517) {
        return;
        }
      else {
        const v4518 = true;
        return;
        }
      break;
      }
    }
  
  
  };
export async function Bob_checkStatus(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_checkStatus expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_checkStatus expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_checkStatus7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_drawRaffleTicket(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_drawRaffleTicket expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_drawRaffleTicket expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_drawRaffleTicket7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_getNumberOfTicketsAvailable(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_getNumberOfTicketsAvailable expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_getNumberOfTicketsAvailable expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_getNumberOfTicketsAvailable7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bob_subscribeToNFT(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob_subscribeToNFT expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob_subscribeToNFT expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Bob_subscribeToNFT7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Bob_checkStatus()(byte,byte)`, `Bob_drawRaffleTicket(uint64)byte[0]`, `Bob_getNumberOfTicketsAvailable()uint64`, `Bob_subscribeToNFT()uint64`],
    pure: [],
    sigs: [`Bob_checkStatus()(byte,byte)`, `Bob_drawRaffleTicket(uint64)byte[0]`, `Bob_getNumberOfTicketsAvailable()uint64`, `Bob_subscribeToNFT()uint64`]
    },
  appApproval: `BiAQAAEDAgggBSgECvu18sgJ66/g9w6I/ozlAQYHoI0GJgMBAAABASI1ADEYQQZEKWRJIls1ASEEWzUCMRkjEkEACjEAKCEJr2ZCBhA2GgAXSUEAaCI1BCM1BkkhCgxAACtJIQsMQAAUIQsSRCk1/4ABAzT/UCEEr1BCAGUhChJENhoBNf8qNP9QQgBVSSEMDEAAFCEMEkQpNf+AAQI0/1AhBK9QQgA6gd6OlHcSRCk1/yg0/1AhBK9QQgAlNhoCFzUENhoDNhoBF0kkDEADPEkhBgxAAstJIQ0MQAJHIQ0SRCEONAESRDQESSISTDQCEhFEKGQqZFBJNQNJSkpKSVcAIDX/IQVbNf4hB1s1/VcwIDX8gVBbNfuBWFs1+oFgWzX5V2gRNfiBeVs190k1BTX2gAQUDOYINPZQsDT2IlVJJQxAAGpJJAxAADMkEkQxADT/E0SACAAAAAAAAARBNP4WULA0/hY1BzT/NP40/TT/NPs0+iUyBjT4NPdCBA5IMQA0/xNEgAgAAAAAAAAEQjT9FlCwNP0WNQc0/zT+NP00/zT7NPolMgY0+DT3QgPdSSMMQACgSDT2VwEINfUxADT/E0QxAIgEyFcACUk19CJVQAAGIzXzQgAGIjXzQgAANPNENPQiVUAABiM18kIABiI18kIAADTyRIAIAAAAAAAABdWwKTUHMQAoMQCIBIIqNPVQNfFXCQE08UxQZjT6IwhJNfE0/RJBABY0/zT+NP00/zT7NPEkMgY0+DT3QgNNNP80/jT9NP80+zTxJTIGNPg090IDN0gxADT/E0QxAIgEL1cACUk19SJVQAAGIjX0QgAGIzX0QgAANPREMQCIBBBXCQFJNfMiVUAABiI18kIABiM18kIAADTyFEQ09SJVQAAGIjXxQgAGIzXxQgAANPFENPMiVUAABiI18EIABiM18EIAADTwFEQ0+SQSQQArgAoAAAAAAAAFMAEAsIACAQA1BzT/NP40/TT8NPsjCDT6JDIGNPg090ICkoAKAAAAAAAABSEAALCAAgAANQc0/zT+NP00/DT7NPo0+TIGNPg090ICaEghBjQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQVbNf6ABMyZklywNP8xABJEsSKyATQDV0gRVwARIluyEiEIshA0A1coILIUNP6yEbOxIrIBNAOBWVuyCCOyEDT/sgezsSKyASKyEiEIshAyCbIVMgqyFDT+shGzQgKCJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDVwAgNf9JNQVJIls1/iEEWzX9gASkpfCINP4WUDT9FlCwNP8xABJENANXMCA0/hY0/RZQARJENP80AyEFWzQDIQdbNP8iIiUyBjQDV1ARIkIBgUkjDEAA6UklDEAAYUglNAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEFWzX+IQdbNf1XMCA1/FdQETX7gARBsUBNsDT/MQASRDT/NP4WUDT9FlA0/FA0+1AoSwFXAGFnSCQ1ATIGNQJCAcdIIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpJVwAgNf8hBVs1/iEHWzX9VzAgNfxXUBE1+4AEmouRdLA0+1cAEUk1+iJbIwgWNPpXCAhQNPpXEAFQNfkjNP6IAeU0/zEAEkQ0/zT+FlA0/RZQNPxQNPlQKEsBVwBhZ0glNQEyBjUCQgFFSCEPiAGfIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yEEWzX+VxAgNf2ABBYtKDs0/xZQNP4WUDT9ULCBEa9JNfxXABE1+yEErzT7VwgIUDT7VxABUDX6IQ+IAUmxIrIBIrISIQiyEDIKshQ0/7IRszEANP8WUDT+FlA0/VA0+lAoSwFXAGFnSCM1ATIGNQJCALM1/zX+Nf01/DX7Nfo1+TX4Nfc19jT7NPgMNPwlEjT8JBIREDT6NPgMEEEAOjT2NPcWUDT4FlA0+VA0+hZQNPsWUDT8FlA0/lA0/xZQKEsBVwB/ZypLAVd/AmdIIQ41ATIGNQJCAE00+TT2EjX1NPY09xZQNPlQNP5QNP8WUDT1FlEHCFAoSwFXAGJnSCEGNQEyBjUCQgAcMRkhBhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKTQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCQxNRJEIjE2EkQjMTcSRCI1ASI1AkL/r0kxGGFAAAVIIQmviShiiTQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQIQgSRDgRTwISRDgSEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 1,
  mapDataSize: 10,
  stateKeys: 2,
  stateSize: 129,
  unsupported: [],
  version: 10,
  warnings: [`This program was compiled with trustworthy maps, but maps are not trustworthy on Algorand, because they are represented with local state. A user can delete their local state at any time, by sending a ClearState transaction. The only way to use local state properly on Algorand is to ensure that a user doing this can only 'hurt' themselves and not the entire system.`]
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1089",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1090",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1091",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v1089",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "v1090",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1091",
                "type": "uint256"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1121",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_checkStatus0_104",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Bob_drawRaffleTicket0_104",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_getNumberOfTicketsAvailable0_104",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_subscribeToNFT0_104",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1256",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v1089",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "v0",
        "type": "uint256"
      }
    ],
    "name": "_reach_oe_v1090",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1313",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T20",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v1328",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "bool",
        "name": "v0",
        "type": "bool"
      }
    ],
    "name": "_reach_oe_v1493",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Bob_checkStatus",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bool",
            "name": "elem0",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "elem1",
            "type": "bool"
          }
        ],
        "internalType": "struct T20",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_a0",
        "type": "uint256"
      }
    ],
    "name": "Bob_drawRaffleTicket",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_getNumberOfTicketsAvailable",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "Bob_subscribeToNFT",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap0Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T0",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "uint256",
            "name": "_Some",
            "type": "uint256"
          }
        ],
        "internalType": "struct T0",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "addr",
        "type": "address"
      }
    ],
    "name": "_reachMap1Ref",
    "outputs": [
      {
        "components": [
          {
            "internalType": "enum _enum_T1",
            "name": "which",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "_None",
            "type": "bool"
          },
          {
            "internalType": "bool",
            "name": "_Some",
            "type": "bool"
          }
        ],
        "internalType": "struct T1",
        "name": "res",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v1121",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v1122",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "enum _enum_T19",
                    "name": "which",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_checkStatus0_104",
                    "type": "bool"
                  },
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "elem0",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T18",
                    "name": "_Bob_drawRaffleTicket0_104",
                    "type": "tuple"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_getNumberOfTicketsAvailable0_104",
                    "type": "bool"
                  },
                  {
                    "internalType": "bool",
                    "name": "_Bob_subscribeToNFT0_104",
                    "type": "bool"
                  }
                ],
                "internalType": "struct T19",
                "name": "v1256",
                "type": "tuple"
              }
            ],
            "internalType": "struct T21",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T22",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002ecc38038062002ecc83398101604081905262000026916200041b565b60008055436003556200003862000247565b6040805133815283516020808301919091528085015180516001600160a01b031683850152908101516060830152820151608082015290517fb77e0b7275941fdbf00765e1e98b79777de983c0eaec6159504ea2e32b7160649181900360a00190a180516000908190528151602090810182905282516040908101839052835182850180519190915281850180518590528151518401518151909401939093528051518201518351901515920191909152519051620000f892906200019a565b60608201526200010b341560076200021d565b62000115620002ae565b33815260208084018051516001600160a01b03168284015280518201516040808501919091529051810151606080850191909152840151608084015260016000819055439055516200016a91839101620004dd565b6040516020818303038152906040526002908051906020019062000190929190620002f1565b50505050620005c4565b620001a462000380565b60005b6001811015620001fa57848160018110620001c657620001c6620004c7565b6020020151828260018110620001e057620001e0620004c7565b602002015280620001f1816200055d565b915050620001a7565b5081818460018110620002115762000211620004c7565b60200201529392505050565b81620002435760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040805160e0810190915260006080820181815260a0830182905260c08301919091528152602081016200027a62000380565b81526040805160608101825260008082526020828101829052928201529101908152602001620002a962000380565b905290565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001620002a962000380565b828054620002ff9062000587565b90600052602060002090601f0160209004810192826200032357600085556200036e565b82601f106200033e57805160ff19168380011785556200036e565b828001600101855582156200036e579182015b828111156200036e57825182559160200191906001019062000351565b506200037c929150620003cd565b5090565b60405180602001604052806001905b620003b6604051806060016040528060008152602001600081526020016000151581525090565b8152602001906001900390816200038f5790505090565b5b808211156200037c5760008155600101620003ce565b604051606081016001600160401b03811182821017156200041557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200042f57600080fd5b604080519081016001600160401b03811182821017156200046057634e487b7160e01b600052604160045260246000fd5b604052835181526060601f19830112156200047a57600080fd5b62000484620003e4565b60208501519092506001600160a01b0381168114620004a257600080fd5b8252604084810151602080850191909152606090950151908301529283015250919050565b634e487b7160e01b600052603260045260246000fd5b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501518185015260808086015160e08601949291860160005b60018110156200055157825180518352858101518684015286015115158683015291840191908301906001016200051f565b50505050505092915050565b60006000198214156200058057634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200059c57607f821691505b60208210811415620005be57634e487b7160e01b600052602260045260246000fd5b50919050565b6128f880620005d46000396000f3fe6080604052600436106100d55760003560e01c80638e31476911610079578063ad2d91d111610056578063ad2d91d1146101fa578063adde787e1461020d578063cadc2e7a14610230578063dda92e7b1461025d57005b80638e314769146101a4578063a1d6acfb146101b7578063ab53f2c6146101d757005b80633bc5b7bf116100b25780633bc5b7bf1461013c5780636cf90080146101695780637eea518c1461017c578063832307571461018f57005b80631e93b0f1146100de57806325361b3e146101025780632c10a1591461012957005b366100dc57005b005b3480156100ea57600080fd5b506003545b6040519081526020015b60405180910390f35b61010a610265565b60408051825115158152602092830151151592810192909252016100f9565b6100dc610137366004611fbe565b6102a4565b34801561014857600080fd5b5061015c610157366004611feb565b6102c8565b6040516100f9919061202e565b6100dc61017736600461205e565b6102df565b6100dc61018a366004611fbe565b6102ff565b34801561019b57600080fd5b506001546100ef565b6100dc6101b2366004611fbe565b61031f565b6101bf61033f565b6040516001600160a01b0390911681526020016100f9565b3480156101e357600080fd5b506101ec61036f565b6040516100f992919061209c565b6100dc6102083660046120d6565b61040c565b61022061021b3660046120e8565b61042c565b60405190151581526020016100f9565b34801561023c57600080fd5b5061025061024b366004611feb565b610467565b6040516100f99190612101565b6100ef610478565b6040805180820190915260008082526020820152610281611bea565b60208101515160009052610293611c09565b61029d82826104a8565b5192915050565b6102ac611c09565b6102c46102be36849003840184612218565b82610e7d565b5050565b6102d0611c43565b6102d9826110a1565b92915050565b6102e7611c09565b6102c46102f93684900384018461226e565b826104a8565b610307611c09565b6102c461031936849003840184612218565b8261115f565b610327611c09565b6102c461033936849003840184612218565b8261130f565b6000610349611bea565b6020810151516003905261035b611c09565b61036582826104a8565b6060015192915050565b60006060600054600280805461038490612332565b80601f01602080910402602001604051908101604052809291908181526020018280546103b090612332565b80156103fd5780601f106103d2576101008083540402835291602001916103fd565b820191906000526020600020905b8154815290600101906020018083116103e057829003601f168201915b50505050509050915091509091565b610414611c09565b6102c461042636849003840184612367565b826114c4565b6000610436611bea565b6020810180515160019052515160400151839052610452611c09565b61045c82826104a8565b602001519392505050565b61046f611c43565b6102d9826116d1565b6000610482611bea565b60208101515160029052610494611c09565b61049e82826104a8565b6040015192915050565b6104b86007600054146028611785565b81516104d39015806104cc57508251600154145b6029611785565b6000808055600280546104e590612332565b80601f016020809104026020016040519081016040528092919081815260200182805461051190612332565b801561055e5780601f106105335761010080835404028352916020019161055e565b820191906000526020600020905b81548152906001019060200180831161054157829003601f168201915b50505050508060200190518101906105769190612455565b9050610580611c66565b7ffccd0bccaa8107f531383c647cefe1c1a05fb130354a290a07a556cdef3b5b7d33856040516105b19291906124eb565b60405180910390a160006020850151515160038111156105d3576105d3612008565b14156109c65781516105ff906001600160a01b031633146105f55760016105f8565b60005b601a611785565b610608336110a1565b81526000815151600181111561062057610620612008565b14156106325760006020820152610656565b6001815151600181111561064857610648612008565b141561065657600160208201525b6106658160200151601b611785565b61066e336116d1565b6040820181905251600090600181111561068a5761068a612008565b141561069c57600060608201526106c3565b600160408201515160018111156106b5576106b5612008565b14156106c357600160608201525b6106e081606001516106d65760016106d9565b60005b601c611785565b6106ec3415601d611785565b6000815151600181111561070257610702612008565b14156107145760006080820152610738565b6001815151600181111561072a5761072a612008565b141561073857600160808201525b6107478160800151601e611785565b6000604082015151600181111561076057610760612008565b141561077257600060a0820152610799565b6001604082015151600181111561078b5761078b612008565b141561079957600160a08201525b6107b68160a001516107ac5760016107af565b60005b601f611785565b60038260c0015114156108c85760e0810180516001905280516000602091820152905160408051825115158152918301511515928201929092527febc121a51cdce04d03c06a107954465190a07143343fb0d0d4a651b1f6916520910160405180910390a160e0810151835261082a611ced565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184519091015260608501519083015191169052608083015161087490600190612572565b602080830180519091019190915260a080850151825160400152815160036060919091015281514360809091015260e0850151825190910152610100840151905160c001526108c2816117ab565b50610e77565b60c081018051600090819052815160200152516040517f28f68b2eab403e63e829d4713dfe71a89fdfe1127afc8c7679fbc3c3641b64d99161091f9181511515815260209182015115159181019190915260400190565b60405180910390a160c08101518352610936611ced565b825181516001600160a01b0391821690526020808501518351908316908201526040808601518451820152606080870151838601805191909516905260808088015185519094019390935260a08088015185519093019290925260c08088015185519092019190915283514393019290925260e0860151835190910152610100850151915101526108c2816117ab565b60016020850151515160038111156109e0576109e0612008565b1415610c9e57602084015151604001516101008201528151610a1c906001600160a01b03163314610a12576001610a15565b60005b6020611785565b610a25336110a1565b6101208201819052516000906001811115610a4257610a42612008565b1415610a55576001610140820152610a7e565b6001610120820151516001811115610a6f57610a6f612008565b1415610a7e5760006101408201525b610a8e8161014001516021611785565b610a9a34156022611785565b6000610120820151516001811115610ab457610ab4612008565b1415610ac7576001610160820152610af0565b6001610120820151516001811115610ae157610ae1612008565b1415610af05760006101608201525b610b008161016001516023611785565b604051600081527f9c7224d185fb96648af7c88e592f71016f2ddf21f23e1d9622fa1cb7b48e19419060200160405180910390a1600060208481018290523382526004905260409020805460ff191660019081178255610100830151519181019190915560a0830151610b739190612572565b610180820181905260408301511415610c1257610b8e611ced565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845182015285518285018051919094169052608080870151845190930192909252610180850151835190910152815160036060919091015281514391015260e0840151815160a00152610100840151905160c001526108c2816117ab565b610c1a611ced565b825181516001600160a01b039182169052602080850151835190831690820152604080860151845182015285518285018051919094169052608080870151845190930192909252610180850151835190910152815160026060919091015281514391015260e0840151815160a00152610100840151905160c001526108c2816117ab565b6002602085015151516003811115610cb857610cb8612008565b1415610dc9578151610ce4906001600160a01b03163314610cda576001610cdd565b60005b6024611785565b610cf034156025611785565b7ff0e6194ab065833b798bc9ac4a6be4df1250292fb7b6d2235ae08e0beea2dd318260400151604051610d2591815260200190565b60405180910390a160408083015190840152610d3f611ced565b825181516001600160a01b03918216905260208085015183519083169082015260408086015184518201528551828501805191909416905260808087015184519093019290925260a080870151845190920191909152825160026060919091015282514392019190915260e0850151825190910152610100840151905160c001526108c2816117ab565b6003602085015151516003811115610de357610de3612008565b1415610e77578151610e0f906001600160a01b03163314610e05576001610e08565b60005b6026611785565b610e1b34156027611785565b6020808301516040516001600160a01b0390911681527fcea92fd2bf6e650eb196ffeba97fabf8fb7a2c7e4be2cf6db27a314bebc9005e910160405180910390a160208201516001600160a01b03166060840152610d3f611ced565b50505050565b610e8d600160005414600b611785565b8151610ea8901580610ea157508251600154145b600c611785565b600080805560028054610eba90612332565b80601f0160208091040260200160405190810160405280929190818152602001828054610ee690612332565b8015610f335780601f10610f0857610100808354040283529160200191610f33565b820191906000526020600020905b815481529060010190602001808311610f1657829003601f168201915b5050505050806020019051810190610f4b91906125f4565b9050610f55611d1d565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f13385604051610f86929190612610565b60405180910390a1610f9a34156008611785565b60808201515151610fad90600190612572565b815152608082018051516020908101518351909101528051516040908101518351901515910152518151610fe49190600090611964565b8160200181905250611006610fff33846020015160016119d8565b6009611785565b815161101e906001600160a01b03163314600a611785565b611026611d4d565b82516001600160a01b039081168252602080850151909116818301526040808501518184015260608086015190840152838201516080840152600260005543600155516110759183910161268c565b60405160208183030381529060405260029080519060200190611099929190611d8e565b505050505050565b6110a9611c43565b60016001600160a01b03831660009081526004602052604090205460ff1660018111156110d8576110d8612008565b141561114f576001600160a01b038216600090815260046020526040908190208151606081019092528054829060ff16600181111561111957611119612008565b600181111561112a5761112a612008565b81528154610100900460ff161515602082015260019091015460409091015292915050565b600080825260208201525b919050565b61116f600260005414600f611785565b815161118a90158061118357508251600154145b6010611785565b60008080556002805461119c90612332565b80601f01602080910402602001604051908101604052809291908181526020018280546111c890612332565b80156112155780601f106111ea57610100808354040283529160200191611215565b820191906000526020600020905b8154815290600101906020018083116111f857829003601f168201915b505050505080602001905181019061122d91906125f4565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d9503384604051611260929190612610565b60405180910390a16112743415600d611785565b805161128c906001600160a01b03163314600e611785565b611294611d4d565b81516001600160a01b03908116825260208084015190911681830152604080840151818401526060808501519084015260808085015190840152600360005543600155516112e49183910161268c565b60405160208183030381529060405260029080519060200190611308929190611d8e565b5050505050565b61131f6005600054146018611785565b815161133a90158061133357508251600154145b6019611785565b60008080556002805461134c90612332565b80601f016020809104026020016040519081016040528092919081815260200182805461137890612332565b80156113c55780601f1061139a576101008083540402835291602001916113c5565b820191906000526020600020905b8154815290600101906020018083116113a857829003601f168201915b50505050508060200190518101906113dd91906126da565b90507fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d3384604051611410929190612610565b60405180910390a161142434156016611785565b805161143c906001600160a01b031633146017611785565b61146b81602001518260400151836060015160006001811061146057611460612638565b6020020151516119f0565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156114a8573d6000803e3d6000fd5b50600080805560018190556114bf90600290611e12565b505050565b6114d46003600054146014611785565b81516114ef9015806114e857508251600154145b6015611785565b60008080556002805461150190612332565b80601f016020809104026020016040519081016040528092919081815260200182805461152d90612332565b801561157a5780601f1061154f5761010080835404028352916020019161157a565b820191906000526020600020905b81548152906001019060200180831161155d57829003601f168201915b505050505080602001905181019061159291906125f4565b604080513381528551602080830191909152808701518051838501520151606082015290519192507f85f73e284b1b1aeb266b14c389a29537c9fdd9a589649702abee8564ab4d1634919081900360800190a16115f134156011611785565b8051611609906001600160a01b031633146012611785565b6020808401518051908201516040516116579361163193929101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8260600151146013611785565b61165f611ced565b815181516001600160a01b03918216905260208084015183519083169082015260408085015184518201528451828501805191909416905282516000920182905282510181905281516002606090910152815143608091820152840151825160a00152905160c00152610e77816117ab565b6116d9611c43565b60016001600160a01b03831660009081526005602052604090205460ff16600181111561170857611708612008565b141561114f576001600160a01b038216600090815260056020526040908190208151606081019092528054829060ff16600181111561174957611749612008565b600181111561175a5761175a612008565b8152905460ff6101008204811615156020840152620100009091041615156040909101529050919050565b816102c45760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080516020810190915260008152816000015160400151826020015160400151106117d85760006117fc565b6002826020015160600151146117f9576003826020015160600151146117fc565b60015b611807576000611817565b8151604001516020808401510151105b156118d957611824611e4f565b8251516001600160a01b039081168252835160209081015182168184015284516040908101518185015281860180515190931660608086019190915283518301516080860152835182015160a08087019190915284519091015160c08087019190915284519091015160e086015292519092015161010084015260076000554360015590516118b59183910161277c565b60405160208183030381529060405260029080519060200190610e77929190611d8e565b8151516020830151516001600160a01b0390811691161481526118fa611ebc565b8251516001600160a01b0390811682528351602090810151821681840152808501805151909216604080850191909152825160a0908101516060860152925160c001516080850152845115159284019290925260056000554360015590516118b591839101612812565b61196c611ee1565b60005b60018110156119b85784816001811061198a5761198a612638565b60200201518282600181106119a1576119a1612638565b6020020152806119b08161286e565b91505061196f565b50818184600181106119cc576119cc612638565b60200201529392505050565b60006119e683853085611a04565b90505b9392505050565b6119fb838383611ade565b6114bf57600080fd5b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b179052915160009283928392918916918391611a6b91612889565b60006040518083038185875af1925050503d8060008114611aa8576040519150601f19603f3d011682016040523d82523d6000602084013e611aad565b606091505b5091509150611abe82826001611baf565b5080806020019051810190611ad391906128a5565b979650505050505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b179052915160009283928392918816918391611b3d91612889565b60006040518083038185875af1925050503d8060008114611b7a576040519150601f19603f3d011682016040523d82523d6000602084013e611b7f565b606091505b5091509150611b9082826002611baf565b5080806020019051810190611ba591906128a5565b9695505050505050565b60608315611bbe5750816119e9565b825115611bce5782518084602001fd5b60405163100960cb60e01b8152600481018390526024016117a2565b604051806040016040528060008152602001611c04611f2c565b905290565b6040805160c0810190915260006080820181815260a083019190915281905b81526000602082018190526040820181905260609091015290565b60408051606081019091528060005b815260006020820181905260409091015290565b604051806101a00160405280611c7a611c43565b815260006020820152604001611c8e611c43565b8152600060208083018290526040808401839052606084018390528051808201825283815280830184905260808501528051808201825283815280830184905260a08501528051918201905290815260c082015260e001611c28611c43565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611c04611f3f565b6040805160a081018252600091810182815260608201839052608082019290925290815260208101611c04611ee1565b6040518060a0016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160008152602001611c04611ee1565b828054611d9a90612332565b90600052602060002090601f016020900481019282611dbc5760008555611e02565b82601f10611dd557805160ff1916838001178555611e02565b82800160010185558215611e02579182015b82811115611e02578251825591602001919060010190611de7565b50611e0e929150611f7e565b5090565b508054611e1e90612332565b6000825580601f10611e2e575050565b601f016020900490600052602060002090810190611e4c9190611f7e565b50565b60405180610120016040528060006001600160a01b0316815260200160006001600160a01b031681526020016000815260200160006001600160a01b03168152602001600081526020016000815260200160008152602001611eaf611ee1565b8152602001600081525090565b6040805160c0810182526000808252602082018190529181019190915260608101611c525b60405180602001604052806001905b611f16604051806060016040528060008152602001600081526020016000151581525090565b815260200190600190039081611ef05790505090565b6040518060200160405280611c04611f93565b6040518060e0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001611eaf611ee1565b5b80821115611e0e5760008155600101611f7f565b6040805160a08101825260008082526020808301829052835190810184529081529091820190611c52565b600060408284031215611fd057600080fd5b50919050565b6001600160a01b0381168114611e4c57600080fd5b600060208284031215611ffd57600080fd5b81356119e981611fd6565b634e487b7160e01b600052602160045260246000fd5b60028110611e4c57611e4c612008565b8151606082019061203e8161201e565b808352506020830151151560208301526040830151604083015292915050565b600060c08284031215611fd057600080fd5b60005b8381101561208b578181015183820152602001612073565b83811115610e775750506000910152565b82815260406020820152600082518060408401526120c1816060850160208701612070565b601f01601f1916919091016060019392505050565b600060608284031215611fd057600080fd5b6000602082840312156120fa57600080fd5b5035919050565b815160608201906121118161201e565b8083525060208301511515602083015260408301511515604083015292915050565b634e487b7160e01b600052604160045260246000fd5b6040805190810167ffffffffffffffff8111828210171561216c5761216c612133565b60405290565b6040516020810167ffffffffffffffff8111828210171561216c5761216c612133565b60405160a0810167ffffffffffffffff8111828210171561216c5761216c612133565b6040516060810167ffffffffffffffff8111828210171561216c5761216c612133565b604051610120810167ffffffffffffffff8111828210171561216c5761216c612133565b8015158114611e4c57600080fd5b803561115a816121ff565b60006040828403121561222a57600080fd5b6040516040810181811067ffffffffffffffff8211171561224d5761224d612133565b604052823581526020830135612262816121ff565b60208201529392505050565b600081830360c081121561228157600080fd5b612289612149565b8335815260a0601f198301121561229f57600080fd5b6122a7612172565b6122af612195565b6020860135600481106122c157600080fd5b815260408601356122d1816121ff565b806020830152506020605f19850112156122ea57600080fd5b6122f2612172565b93506060860135845283604082015261230d6080870161220d565b606082015261231e60a0870161220d565b608082015281526020820152949350505050565b600181811c9082168061234657607f821691505b60208210811415611fd057634e487b7160e01b600052602260045260246000fd5b6000818303606081121561237a57600080fd5b612382612149565b833581526040601f198301121561239857600080fd5b6123a0612149565b60208581013582526040909501358582015293810193909352509092915050565b805161115a81611fd6565b600082601f8301126123dd57600080fd5b6123e5612172565b806060808501868111156123f857600080fd5b855b81811015612449578281890312156124125760008081fd5b61241a6121b8565b8151815260208083015181830152604080840151612437816121ff565b908301529086529094019382016123fa565b50919695505050505050565b6000610160828403121561246857600080fd5b6124706121db565b612479836123c1565b8152612487602084016123c1565b6020820152604083015160408201526124a2606084016123c1565b60608201526080830151608082015260a083015160a082015260c083015160c08201526124d28460e085016123cc565b60e0820152610140929092015161010083015250919050565b6001600160a01b0383168152815160208083019190915282015151805160e0830191906004811061251e5761251e612008565b8060408501525060208101511515606084015260408101515160808401526060810151151560a08401526080810151151560c0840152509392505050565b634e487b7160e01b600052601160045260246000fd5b600082198211156125855761258561255c565b500190565b600060e0828403121561259c57600080fd5b6125a4612195565b905081516125b181611fd6565b815260208201516125c181611fd6565b8060208301525060408201516040820152606082015160608201526125e983608084016123cc565b608082015292915050565b600060e0828403121561260657600080fd5b6119e9838361258a565b6001600160a01b03929092168252805160208084019190915201511515604082015260600190565b634e487b7160e01b600052603260045260246000fd5b8060005b6001811015610e77578151805185526020808201518187015260409182015115159186019190915260609094019390910190600101612652565b81516001600160a01b03908116825260208084015190911690820152604080830151908201526060808301519082015260808083015160e08301916126d39084018261264e565b5092915050565b600061010082840312156126ed57600080fd5b60405160c0810181811067ffffffffffffffff8211171561271057612710612133565b604052825161271e81611fd6565b8152602083015161272e81611fd6565b6020820152604083015161274181611fd6565b604082015261275384606085016123cc565b606082015260c0830151608082015260e0830151612770816121ff565b60a08201529392505050565b81516001600160a01b031681526020808301516101608301916127a9908401826001600160a01b03169052565b506040830151604083015260608301516127ce60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e08301516127ff60e084018261264e565b5061010083015161014083015292915050565b81516001600160a01b039081168252602080840151821690830152604080840151909116908201526060808301516101008301916128529084018261264e565b50608083015160c083015260a090920151151560e09091015290565b60006000198214156128825761288261255c565b5060010190565b6000825161289b818460208701612070565b9190910192915050565b6000602082840312156128b757600080fd5b81516119e9816121ff56fea2646970667358221220440debcfaf9e1b1aaf042964a243864603309382a44158a08561d6f75a83acd564736f6c634300080c0033`,
  BytecodeLen: 11980,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:34:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:38:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:45:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:120:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './index.rsh:135:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:56:19:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob_checkStatus": Bob_checkStatus,
  "Bob_drawRaffleTicket": Bob_drawRaffleTicket,
  "Bob_getNumberOfTicketsAvailable": Bob_getNumberOfTicketsAvailable,
  "Bob_subscribeToNFT": Bob_subscribeToNFT
  };
export const _APIs = {
  Bob: {
    checkStatus: Bob_checkStatus,
    drawRaffleTicket: Bob_drawRaffleTicket,
    getNumberOfTicketsAvailable: Bob_getNumberOfTicketsAvailable,
    subscribeToNFT: Bob_subscribeToNFT
    }
  };
