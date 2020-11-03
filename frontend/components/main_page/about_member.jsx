import React from 'react';

class AboutMember extends React.Component {
  render() {
    return (
      <div className='about-member'>
        <span className='about-member-name'>{this.props.member.full_name}</span>
      </div>
    )
  }
}

export default AboutMember;