
pragma solidity >=0.4.21 <0.9.0;

contract Election {
    address public admin;
    uint256 candidateCount;
    uint256 voterCount;
    bool start;
    bool end;

    constructor() public {

        admin = msg.sender;
        candidateCount = 0;
        voterCount = 0;
        start = false;
        end = false;
    }

    function getAdmin() public view returns (address) {
        
        return admin;
    }

    modifier onlyAdmin() {
  
        require(msg.sender == admin);
        _;
    }

    struct Candidate {
        uint256 candidateId;
        string header;
        string slogan;
        uint256 voteCount;
    }
    mapping(uint256 => Candidate) public candidateDetails;

   
    function addCandidate(string memory _header, string memory _slogan)
        public
    
        onlyAdmin
    {
        Candidate memory newCandidate =
            Candidate({
                candidateId: candidateCount,
                header: _header,
                slogan: _slogan,
                voteCount: 0
            });
        candidateDetails[candidateCount] = newCandidate;
        candidateCount += 1;
    }

    
    struct ElectionDetails {
        string adminName;
        string adminEmail;
        string adminTitle;
        string electionTitle;
        string organizationTitle;
    }
    ElectionDetails electionDetails;

    function setElectionDetails(
        string memory _adminName,
        string memory _adminEmail,
        string memory _adminTitle,
        string memory _electionTitle,
        string memory _organizationTitle
    )
        public

        onlyAdmin
    {
        electionDetails = ElectionDetails(
            _adminName,
            _adminEmail,
            _adminTitle,
            _electionTitle,
            _organizationTitle
        );
        start = true;
        end = false;
    }


    function getElectionDetails()
    public
    view
    returns(string memory adminName, 
    string memory adminEmail, 
    string memory adminTitle, 
    string memory electionTitle, 
    string memory organizationTitle){
        return(electionDetails.adminName, 
        electionDetails.adminEmail, 
        electionDetails.adminTitle, 
        electionDetails.electionTitle, 
        electionDetails.organizationTitle);
    }

    function getTotalCandidate() public view returns (uint256) {
        return candidateCount;
    }

 
    function getTotalVoter() public view returns (uint256) {
        return voterCount;
    }


    struct Voter {
        address voterAddress;
        string name;
        string phone;
        bool isVerified;
        bool hasVoted;
        bool isRegistered;
    }
    address[] public voters;
    mapping(address => Voter) public voterDetails;

    
    function registerAsVoter(string memory _name, string memory _phone) public {
        Voter memory newVoter =
            Voter({
                voterAddress: msg.sender,
                name: _name,
                phone: _phone,
                hasVoted: false,
                isVerified: false,
                isRegistered: true
            });
        voterDetails[msg.sender] = newVoter;
        voters.push(msg.sender);
        voterCount += 1;
    }

 
    function verifyVoter(bool _verifedStatus, address voterAddress)
        public
       
        onlyAdmin
    {
        voterDetails[voterAddress].isVerified = _verifedStatus;
    }

 
    function vote(uint256 candidateId) public {
        require(voterDetails[msg.sender].hasVoted == false);
        require(voterDetails[msg.sender].isVerified == true);
        require(start == true);
        require(end == false);
        candidateDetails[candidateId].voteCount += 1;
        voterDetails[msg.sender].hasVoted = true;
    }


    function endElection() public onlyAdmin {
        end = true;
        start = false;
    }
    function getStart() public view returns (bool) {
        return start;
    }

    function getEnd() public view returns (bool) {
        return end;
    }
}
