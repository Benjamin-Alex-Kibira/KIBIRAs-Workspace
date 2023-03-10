var app = new Vue({
    el: '#app',
    data: {
      username: '',
      password: ''
    },
    methods: {
      login: function() {
        axios.post('/login', {
          username: this.username,
          password: this.password
        })
        .then(function(response) {
          window.location.href = '/dashboard';
        })
        .catch(function(error) {
          alert('Invalid username or password.');
        });
      }
    }
  });
  