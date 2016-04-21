var Output = React.createClass({
  getInitialState: function() {
    return {}
  },
  componentDidMount: function() {
/*
    this.serverRequest = $.get(this.props.url, function(data) {
      this.setState(data).bind(this);
      console.log(this.state);
    })
    */
  },
  render: function() {
    console.log(this.props.list);

    var userlist = this.props.list;
    return (
      <div class="snot">
        {userlist.map(function(camper, key) {
          return (<div key={key + 1} class='item'><span class='rank'>{key + 1}</span>
            <span class='name'>{camper.username}<img src={camper.img} /></span>
            <span class='alltime'>{camper.alltime}</span>
            <span class='recent'>{camper.recent}</span>
            </div>);
        })}
      </div>
    )
  }
});

//ReactDOM.render(<Output list=''/>, document.getElementById('output'));

$.get({
  url: 'https://fcctop100.herokuapp.com/api/fccusers/top/recent',
  dataType: "json",
  success: function(data) {
    ReactDOM.render(<Output list={data} />, document.getElementById('output'));
    console.log(data);
  }
})
