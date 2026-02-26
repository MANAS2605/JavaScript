const accountId=144553
let accountEmail="manas@gmail.com"
var accountPassword="12345"//never use var (outdated) and has issues instead use let
accountCity="Jaipur"//variable only but not recommended
let accountState;
// accountId=2 //Not allowed

accountEmail="hc@hc.com"
accountPassword="22212311"
accountCity="Bengaluru"

/* 
prefer not to use var 
bcoz of issue in block scope and functional scope
 */
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
