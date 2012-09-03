describe("mail app start", function(){

  var getInboxHandler;

  beforeEach(function(){
    getInboxHandler = jasmine.createSpy();
    BBCloneMail.respondTo("mail:inbox", getInboxHandler);
  });

  afterEach(function(){
    BBCloneMail.removeRequestHandler("mail:inbox");
  });

  describe("when starting the mail app with an empty route (#)", function(){
    var inbox, handler;

    beforeEach(function(){
      handler = jasmine.createSpy();
      BBCloneMail.registerCommand("show:mail:list", handler);

      inbox = BBCloneMail.module("MailApp.Inbox");
      inbox.start();

      Backbone.history.start();
    });

    afterEach(function(){
      inbox.stop();
      BBCloneMail.removeCommand("show:mail:list");
    });

    it("should show the inbox", function(){
      expect(handler.wasCalled).toBe(true);
    });

  });

});