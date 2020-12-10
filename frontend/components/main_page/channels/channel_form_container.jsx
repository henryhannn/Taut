import { connect } from 'react-redux';
import { createChannel } from '../../../actions/channel_actions';
import ChannelForm from './channel_form';

const mapStateToProps = state => {
  return ({
    channel: {
      name: ''
    }
  })
}

const mapDispatchToProps = dispatch => ({
  submitForm: (channel) => dispatch(createChannel(channel))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChannelForm)