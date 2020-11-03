// channel info on the right

import React from 'react';
import AboutMember from './about_member';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const members = this.props.memberships.map((mem) => {
      return this.props.users[mem.user_id]
    });

    return (
      <div className='about'>
        <button className='about-close-button' onClick={this.props.closeAbout}><i className='fas fa-times'></i></button>
        <div className='about-members'>
          <h2 className='about-members-title'>Members</h2>
          {members.map(mem => <AboutMember key={mem.id} member={mem}/>)}
        </div>
      </div>
    )
  }
}

export default About;