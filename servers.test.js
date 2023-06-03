describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  // it('it should update the serverTbody', function(){
  //   // submitServerInfo();
  //   updateServerTable();
  //   expect(serverTbody.innerText).toEqual('Alice	$0.00')
  // });
  afterEach(function() {
    serverTbody.innerHTML = '';
  });
 });
 

