import React from 'react';
import { connect } from 'react-redux';

import { getData } from '../redux/actions/dataActions';

import MainContainer from '../containers/MainContainer';

const url = 'http://138.197.173.132:8000/api/v0/news/';

class Homepage extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.getDataAction(url);
    }

    render() {
        const { list, isFetching, isError } = this.props

        return (
            <MainContainer
                isFetching={isFetching}
                isError={isError}
                title={'Новости'}
                text={'В фотостудии профессиональные фотографы создают фотографию. Фотография в более узком смысле этого слова — это искусство рисования светом. Исходя из этого, фотостудия — не что иное, как мастерская для рисования светом. Технически фотография делается с помощью фотокамеры. Профессиональные фотографы говорят, что «снимает фотограф, а не фотоаппарат». Поэтому разделять техническую часть производства фотографии (фотоаппарат, фотостудия, свет и т. д.) и искусство фотографии (сочетание личного видения, опыта и визуального мышления фотографа) — некорректно. Другими словами, фотостудия — это рабочее место фотографа. Фотограф без студии может работать, а студия без фотографа немыслима.'}
            >
            </MainContainer>
        )
    }
}

const mapStateToProps = store => {
    return {
        news: store.news,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getDataAction: (url) => dispatch(getData(url)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Homepage);