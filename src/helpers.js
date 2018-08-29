module.exports = {
  getChannelByType: type => {
    if (typeof type !== 'string') return;
    let channels = client.channels.filter(channel => {
      if (channel.type === type) {
        return channel;
      }
    });
    return channels;
  },
  getChannelByParams: params => {
    if (typeof params === 'string') {
      let channels = client.channels.map(channel => {
        return channel[params];
        // return {
        //   name: channel.name,
        //   id: channel.id
        // };
      });
      return channels;
    } else if (typeof params === 'object') {
      return;
      // let channels = client.channels.map(channel => {
      //   return channel[params];
      // }
    }
    // const
    // filteredTextChannels = textChannels.map(channel => {
    //   return {
    //     name: channel.name,
    //     id: channel.id
    //   };
    // });
  },
  filterChannels: params => {
    if (typeof params === 'string') {
      let channels = client.channels.map(channel => {
        return channel[params];
      });
      return channels;
    } else if (typeof params === 'object') {
      let channels = client.channels.map(channel => {
        let obj = {};
        // Set up each param
        params.forEach(param => {
          obj[param] = channel[`${param}`];
        });
        // Return channel with filtered params
        return obj;
      });
      return channels[0];
    } else {
      return;
    }
  },
  getChannelId: channelName => {
    let channelNamesAndIds = client.channels.map(channel => {
      return {
        name: channel.name,
        id: channel.id
      };
    });
    if (typeof channelName !== 'string') return;
    let channel = channelNamesAndIds.filter(channel => {
      if (channel.name === channelName) return channel;
    });
    return channel[0].id;
  }
};

// // const client = require('../app');
// // const Discord = require('discord.js');
// // const client = new Discord.Client();

// module.exports = {
//   getTextChannels: client => {
//     if (typeof client === 'undefined') return;
//     let textChannels = client.channels.filter(channel => {
//       if (channel.type === 'text') {
//         return channel;
//       }
//     });
//     return textChannels;
//   },
//   filterChannels: params => {
//     if (typeof client === 'undefined') return;
//     // return client;
//     // console.log(typeof params)
//     // const list
//     let a = client.channels.map(channel => {
//       return {
//         name: channel.name,
//         id: channel.id
//       };
//     });
//     return a;
//   }
// };

// // getChannelId: getChannelId = channelName => {
// //   if (typeof channelName !== 'string') return;
// //   let channel = filteredTextChannels.filter(chn => {
// //     if (chn.name === channelName) return chn;
// //   });
// //   return channel[0].id;
// // },

// // xgetChannelId: channelName => {
// //   console.log('id');
// // }
// // };
