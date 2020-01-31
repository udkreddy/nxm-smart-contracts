
pragma solidity 0.5.10;

import "../ClaimsData.sol";


contract ClaimsDataMock is ClaimsData {

    constructor() public ClaimsData()
    {
        maxVotingTime = 1800;
        minVotingTime = 1200;
    }

}
