import React from 'react';
import './profile.scss';
class Profile extends React.Component {
  state = {
    a: [
      ["Amzad Hosen", "182-15-11589", "https://scontent.fdac35-1.fna.fbcdn.net/v/t1.0-9/62188700_2204344586328043_23440664486215680_n.jpg?_nc_cat=108&_nc_ohc=0oS9G7DjtWEAQm7CPs8dBtkZqzr45Il3AlkjYUDiWIIsbJVIK64dEviNg&_nc_ht=scontent.fdac35-1.fna&oh=a390d9aa9e4e10105862b2e1a6bc9295&oe=5E7D5242"],
      ["Md. Imtiaz Hossain", "182-15-11790", "https://i.ibb.co/YBK2tLK/Screenshot-2019-12-11-2-Md-Imtiaz-Hossain.png"],
      ["Md. Hasanul Bari", "182-15-11788", "https://scontent.fdac35-1.fna.fbcdn.net/v/t1.0-9/p960x960/71180138_2494558464101079_1762533249747255296_o.jpg?_nc_cat=106&_nc_ohc=6ir5eR0VBBQAQnqvoN9C0UcpTRwneyA5VzCWoxL_YVCC7jn3a_14PqSZw&_nc_ht=scontent.fdac35-1.fna&oh=802db3ad138d7cb878fd85e0c989c52d&oe=5E897908"]]
  }
  render() {
    const mon = this.state.a;
    return (
      <div className="container">
        <div className="at-section">
          <div className="at-section__title">The Team</div>
        </div>
        <div className="at-grid" data-column="3">
          {mon.map((item, i) => (
            <div className="at-column" key={i}>
              <div className="at-user">
                <div className="at-user__avatar"><img src={item[2]} /></div>
                <div className="at-user__name">{item[0]}</div>
                <div className="at-user__title"> {item[1]} </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
export default Profile;