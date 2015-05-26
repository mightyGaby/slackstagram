console.log('loaddeeeddd!');

//get messages
function getMessages(callback){
  $.ajax({
    url: '/api/groups.history',
    success: function(data){
      console.log(data);
      callback(data);
    }
  })
}


function renderLinksView(links){
  var listDisplay = $('#all-messages');
      listDisplay.empty();
  for(var i in links){
    var image = $('<img>').prop('src', links[i]).addClass('fun-image');
    $('#all-messages').append(image);
  }
}

getMessages(renderLinksView);

// //NEED TO FIX THIS:
// function renderGiph(data){
//   var listDisplay = $('#all-giphs');
//       listDisplay.empty();
//       messages = [].concat(data.messages);
//   for(var i in messages){
//     if((messages[i]["type"]=="message") && (messages[i]["subtype"] == undefined))
//       var giphLink = messages[i]["attachments"][0]["image_url"];
//       var giph = $('<img src=' + giphLink + '>');
//       listDisplay.append(giph);
//       console.log(giph);
//   }
// }

// getMessages(renderGiph)

//get
// function getFiles(){
//   files = []
//   $.ajax({
//     url: '/api/groups.history',
//     success: function(messages){
//       for(i in messages){
//         if(messages[i]["attachments"] !== undefined)
//           files = [].concat(messages[i])
//         }
//         return files;
//       }
//     })
//   }








// files = []
// response["messages"].map do |message|
//   files.push(message["attachments"]) if message["attachments"] != nil
// end
//
// file = files[rand(files.length)]      #data should be a random file from the list



// $(document).ready(function(){
// })
