// socket.io configuration
export const io = {
  // we could have multiple sockets that we identify with names
  // one of these sockets may have set "default" to true
  sockets: [
    {
      default: true, // make this the default socket
      name: 'main', // give it a name that we can later use to choose this socket in the .vue file
      url: 'localhost:3700' || process.env.WS_URL, // URL wherever your socket IO server runs
      vuex: {
        mutations: [
          {
            msgToClient: 'socket/ADD_MESSAGE',
          },
        ],
        actions: [
          {
            crmTicketCreate: 'crmAlert/displayCrmAlert',
          },
        ],
      },
    },
  ],
};
