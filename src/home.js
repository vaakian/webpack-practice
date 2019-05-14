export default {
  name: 'NomadJohn',
  showName: function() {
    console.log(this.name)
  },
  createElement: function() {
    document.write('<h1>Hello, webpack!</h1>')
  }
}