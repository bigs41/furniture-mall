<template>
    <v-row>
<div class="row">
                <div class="col-md-6 offset-md-3 col-sm-12">
                    <h1 class="text-center">{{ title }}</h1>
                    <br>
                    <div id="status"></div>
                    <hr>
                    <div id="chat">
                        <input type="text" v-model="name" id="username" class="form-control" placeholder="Enter name...">
                        <br>
                        <div class="card">
                            <div>
                                <ul>
                                    <li v-for="message of messages" :key="message">
                                        {{ message.name }}: {{ message.text }}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <br>
                        <textarea id="textarea" class="form-control" v-model="text" placeholder="Enter message..."></textarea>
                        <br>
                        <button id="send" class="btn" @click="sendMessage()">Send</button>
                    </div>
                </div>
            </div>     
    </v-row>
</template>
<script>

export default {
    data() {
        return {
            title: 'Nestjs Websockets Chat',
            name: '',
            text: '',
            messages: [],
            socket: null
        }
    },
    methods: {
        sendMessage() {
            if(this.validateInput()) {
            const message = {
            name: this.name,
                text: this.text
            }
            this.socket.emit('msgToServer', message)
            this.text = ''
        }
        },
        receivedMessage(message) {
            console.log(message);
            this.messages.push(message)
        },
        validateInput() {
            try {
                return !this.empty(this.name) && !this.empty(this.text)
            } catch (error) {
                console.log(error)
            }
        
        }
    },
watch:{
  messages:{
    handler: function(newValue, oldValue) {
      console.log(newValue)
    },
    deep: true
  }
},
 mounted() {
    try {
        this.socket = io({
            transports: ["websocket", "polling"],
            path: '/tts_io',
        })  
    } catch (error) {
          this.socket = io('http://localhost:8080',{
            transports: ["websocket", "polling"],
            path: '/tts_io',
        })
    }
  this.socket.on('msgToClient', (message) => {
   this.receivedMessage(message)
  })
 }
}
</script>