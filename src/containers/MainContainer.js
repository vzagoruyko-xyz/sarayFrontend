import React from 'react';

const MainContainer = (props) => (
    props.isFetching ?
        <h6>Загрузка</h6>
    : props.isError ?
        <h6>Ошибка</h6>
    :
        <section className='main-container'>
            <div className='video-container'>
                <video loop muted autoPlay playsInline>
                    <source src='' type='video/webm' />
                    <source src='' type='video/mp4' />
                </video>
            </div>
            <main className='content-container'>
                <article className='content'>
                    <h2 className='content--title'>{props.title}</h2>
                    <p className='content--text'>{props.text}</p>
                    {props.children}
                </article>
            </main>
        </section>
);

export default MainContainer;