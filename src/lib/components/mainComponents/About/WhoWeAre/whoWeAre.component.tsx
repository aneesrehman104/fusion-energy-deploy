import React from 'react';
import styles from './whoWeAre.module.css';

interface PROPS {}
const WhoWeAre: React.FC<PROPS> = () => {
    return (
        <section className={styles.fusionEnergyWhoWeAreBackgroundImage}>
            <div className={styles.fusionEnergWhoWeAreSpaceAround}>
                <section className={styles.fusionEnergWhoWeAreInnerWidth}>
                    <h2 className={styles.fusionEnergyWhoWeAreMainTitle}>
                        Founder{' '}
                        <span className={styles.fusionEnergyWhoWeAreMainTitle}>
                            Jason Wilkerson
                        </span>
                    </h2>
                    <p
                        className={styles.fusionEnergyBackgroundDescription}
                        style={{ width: '100%', color: '#606771' }}
                    >
                        Founder Jason Wilkerson has worked in the solar industry
                        for over 10 years and has personally overseen more than
                        25,000 solar installs throughout California and Nevada.
                        Having recently held the position of Regional Vice
                        President of Sales at SolarCity, Jason had previously
                        worked in the home alarm industry helping thousands of
                        families to secure their homes. Jason has a passion for
                        technology and always wants to know what new thing is
                        out there to help simplify life at home for his wife and
                        children. These three aspects of Jason’s life are what
                        caused Jason to start Fuzion Energy. He believes that
                        solar is truly the future of our world and hopes that he
                        can help to fight global warming so that his children
                        and grandchildren have a planet they can enjoy.
                    </p>
                </section>
            </div>
        </section>
    );
};

export default WhoWeAre;
