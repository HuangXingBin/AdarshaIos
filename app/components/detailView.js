import React, {ListView, Text, Component, ScrollView, View, PropTypes, TouchableHighlight, Image} from 'react-native';
import _ from 'lodash';
import shouldPureComponentUpdate from 'react-pure-render/function';
import wylie from 'tibetan/wylie';
import {DB_NAME} from '../constants/AppConstants';
import {Icon} from 'react-native-icons';
import {styles} from './detailView.style';
import {values, styles as globalStyles} from '../styles/global.style';
import {loadNext, loadPrev} from '../helpers';

const TOP = -20;
const DEFAULT_TOP_REACHED_THRESHOLD = 1000;

class DetailView extends Component {

  static PropTypes = {
    navigator: PropTypes.array.isRequired,
    route: PropTypes.object.isRequired,
    rows: PropTypes.array.isRequired,
    setFontSize: PropTypes.func.isRequired,
    setLineHeight: PropTypes.func.isRequired,
    setWylieStatus: PropTypes.func.isRequired,
    settings: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
  }

  state = {
    dataSource: new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    })
  }

  shouldComponentUpdate = shouldPureComponentUpdate;

  componentDidMount() {
    this.loading = false;
    this._rows = [];
    this.setState({
      dataSource: this.getDataSource(this.props.rows)
    });
  }

  getDataSource = (rows, append = true) => {
    if (append) {
      this._rows = this._rows.concat(rows);
    }
    else {
      this._rows = rows.concat(this._rows);
    }
    return this.state.dataSource.cloneWithRows(this._rows);
  }

  rerenderListView = () => {
    // workaround of forcing a ListView to update
    // https://github.com/facebook/react-native/issues/1133
    this._rows = JSON.parse(JSON.stringify(this._rows));
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(this._rows)
    });
  }

  goBack = () => {
    this.props.navigator.pop();
  }

  goHome = () => {
    this.props.navigator.popToTop();
  }

  decreaseFontSize = () => {
    let fontSize = this.props.settings.fontSize - 1;
    if (fontSize >= 0) {
      this.props.setFontSize(fontSize);
    }
    this.rerenderListView();
  }

  increaseFontSize = () => {
    let fontSize = this.props.settings.fontSize + 1;
    if (fontSize < 30) {
      this.props.setFontSize(fontSize);
    }
    this.rerenderListView();
  }

  decreaseLineHeight = () => {
    let lineHeight = this.props.settings.lineHeight - 0.1;
    if (lineHeight >= 0) {
      this.props.setLineHeight(lineHeight);
    }
    this.rerenderListView();
  }

  increaseLineHeight = () => {
    let lineHeight = this.props.settings.lineHeight + 0.1;
    if (lineHeight < 30) {
      this.props.setLineHeight(lineHeight);
    }
    this.rerenderListView();
  }

  toggleWylieStatus = () => {
    let status = this.props.settings.toWylie;
    this.props.setWylieStatus(! status);
    this.rerenderListView();
  }

  renderRow = (row, index) => {
    let {fontSize, lineHeight, toWylie} = this.props.settings;
    return (
      <View style={{paddingLeft: 14, paddingRight: 14, marginBottom: 20}}>
        <View style={{borderColor: '#cccccc', borderBottomWidth: 1, paddingBottom: 14}}>
          <Text>{row.uti || row.segname}</Text>
          <Text style={{fontSize, lineHeight: lineHeight * fontSize}}>{toWylie ? wylie.toWylie(row.text) : row.text}</Text>
        </View>
      </View>
    );
  }

  onTopReached = () => {
  }

  onEndReached = () => {
    console.info('onEndReached');
    this.loadNext();
  }

  loadPrev = () => {
  }

  loadNext = () => {

    if (this.loading) {
      return;
    }
    this.loading = true;

    let lastRow = _.last(this._rows);
    let uti = lastRow.uti || lastRow.segname;

    if (! uti) {
      return;
    }

    loadNext({count: 100, uti})
      .then(rows => {
        this.setState({
          dataSource: this.getDataSource(rows)
        });
      })
      .finally(() => {
        this.loading = false;
      })
  }

  handleScroll = () => {
    let scrollProps = this.refs.listView.scrollProperties;
  };

  render() {

    let {settings} = this.props;

    let listViewProps = {
      ref: 'listView',
      dataSource: this.state.dataSource,
      onEndReached: this.onEndReached,
      scrollRenderAheadDistance: 2000,
      onEndReachedThreshold: 2000,
      onScroll: this.handleScroll,
      renderRow: this.renderRow,
      scrollEventThrottle: 16
    };

    return (
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableHighlight onPress={this.goBack} style={styles.navButton} underlayColor={values.underlayColor}>
            <Icon name="ion|chevron-left" style={globalStyles.navIcon} size={values.navIconSize} color={values.navIconColor} />
          </TouchableHighlight>
          <Text numberOfLines={1} style={styles.navTitle}>{this.props.title}</Text>
          <TouchableHighlight onPress={this.goHome} style={styles.navButton} underlayColor={values.underlayColor}>
            <Icon name="ion|home" style={globalStyles.navIcon} size={values.navIconSize} color={values.navIconColor} />
          </TouchableHighlight>
        </View>
        <ListView {...listViewProps} />
        <View style={styles.boxButton}>
          <TouchableHighlight underlayColor={'#ecf0f1'} style={[styles.button]} onPress={this.decreaseLineHeight}>
            <Image style={styles.buttonImage} source={require('image!icon-line-height-minus')} />
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#ecf0f1'} style={[styles.button]} onPress={this.increaseLineHeight}>
            <Image style={styles.buttonImage} source={require('image!icon-line-height-add')} />
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#ecf0f1'} style={[styles.button]} onPress={this.decreaseFontSize}>
            <Image style={styles.buttonImage} source={require('image!icon-font-size-minus')} />
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#ecf0f1'} style={[styles.button]} onPress={this.increaseFontSize}>
            <Image style={styles.buttonImage} source={require('image!icon-font-size-add')} />
          </TouchableHighlight>
          <TouchableHighlight underlayColor={'#ecf0f1'} style={[styles.button]} onPress={this.toggleWylieStatus}>
            <Image style={styles.buttonImage} source={require('image!icon-tibetan-wylie-switch')} />
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default DetailView;
