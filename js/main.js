var Output = React.createClass({
  getInitialState: function() {
    return {};
  },
  componentDidMount: function() {
    return {};
  },
  render: function() {
    //console.log(this.props.list);

    var userlist = this.props.list;
    return (
      <div className='container'>
        {userlist.map(function(camper, key) {
          return (<div key={key + 1} className="item"><div className='rank'>{key + 1}</div>
            <div className='name'><img src={camper.img} />{camper.username}</div>
            <div className='alltime'>{camper.alltime}</div>
            <div className='recent'>{camper.recent}</div>
            </div>);
        })}
      </div>
    )
  }
});


function getList(url) {
  $.get({
    url: url,
    dataType: "json",
    success: function(data) {
      ReactDOM.render(<Output list={data} />, document.getElementById('output'));
      //console.log(data);
    }
  });
}


$('.alltime').click(function() {
  $('#alltimeLabel').addClass('active');
  $('#recentLabel').removeClass('active');
  getList('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
});


$('.recent').click(function() {
  $('#recentLabel').addClass('active');
  $('#alltimeLabel').removeClass('active');
  getList('https://fcctop100.herokuapp.com/api/fccusers/top/recent');
});


getList('https://fcctop100.herokuapp.com/api/fccusers/top/alltime');
