import React from 'react';
import {connect} from 'react-redux';
import Note from '../components/Note';

export default connect(mapStateToProps, mapDispatchToProps)(Note);

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}
