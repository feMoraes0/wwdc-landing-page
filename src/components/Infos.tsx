import React from 'react';
import './Infos.css';
import presentation from '../assets/icons/presentation.png';
import play from '../assets/icons/play.png';
import chatsquare from '../assets/icons/chat-square.png';
import person from '../assets/icons/person-outline.png';
import square from '../assets/icons/square.png';
import conversation from '../assets/icons/conversation.png';
import InfoCard from './InfoCard';

const Infos = () => (
  <main id='infos'>
    <InfoCard icon={presentation} title='Special Event Keynote and \n Platforms State of the Union'>
      <p>The Apple Worldwide Developers Conference kicks off with exciting reveals, inspiration, and new opportunities to continue creating the most innovative apps in the world. Join the worldwide developer community for an in-depth look at the future of Apple platforms, directly from Apple Park.</p>
      <p>Special Event Keynote</p>
      <span>June 22, 10 a.m. PDT</span>
      <p>Platforms State of the Union</p>
      <span>June 22, 2 p.m. PDT</span>
    </InfoCard>
    <InfoCard icon={play} title='100+ Engineering Sessions'>
      <p>Learn how to build the next generation of apps with technical and design-focused videos by Apple engineers. Video collections will be posted each day. Watch on the web or in the Apple Developer app on iPhone, iPad, and Apple TV.</p>
      <div className='divider' />
      <span>June 23-26</span>
    </InfoCard>
    <InfoCard icon={chatsquare} title='All-New Developer Forums'>
      <p>Connect with over 1,000 Apple engineers on the all-new Apple Developer Forums. Anyone can search and view the forums or sign in with an Apple ID to ask questions about a variety of development topics. Starting the first day of the conference, eligible members can also connect with Apple engineers over WWDC20 content on the forums.</p>
      <a href="/">Learn more {'>'}</a>
    </InfoCard>
    <InfoCard icon={person} title='1-on-1 Developer Labs (by appointment)'>
      <p>Request an appointment with an Apple engineer for one-on-one technical guidance on Apple technologies. Get in-depth details on how to implement new features, directly from the engineers who helped build the latest advances in Apple platforms. Eligible members can simply sign in, choose a lab from the schedule, enter a question, and submit. Availability is limited. Requests will be reviewed and you’ll receive an email with your status.</p>
      <div className='divider' />
      <span>June 23-26</span>
      <a href="/">Learn more {'>'}</a>
    </InfoCard>
    <InfoCard icon={square} title='Apple Design Awards'>
      <p>Apps and games created by millions of developers around the world have made a positive impact on people’s daily lives. Join us in celebrating the developers who used their ingenuity, smarts, and savvy to build this year’s Apple Design Award winners.</p>
      <div className='divider' />
      <span>June 29</span>
      <a href="/">See last year’s winners {'>'}</a>
    </InfoCard>
    <InfoCard icon={conversation} title='Conversations at WWDC20'>
      <p>A Conversation with Lisa Jackson and Former Attorney General Eric Holder Lisa Jackson, Apple’s vice president of Environment, Policy and Social Initiatives, hosts a conversation with former Attorney General Eric Holder on the topic of race in America. This wide-ranging discussion touches on the fight for equal justice, how technology can empower people to change the world for the better, and ways to help in this moment.</p>
      <div className='divider' />
      <span>June 24</span>
      <a href="/">Learn more {'>'}</a>
    </InfoCard>
    <InfoCard>
      <p>A Conversation with the Cast and Creators of Mythic Quest: Raven’s Banquet The creators and cast of the Apple TV+ hit show Mythic Quest: Raven’s Banquet talk about the beloved “Quarantine” episode filmed entirely on iPhone and answer questions from the Apple developer community.</p>
      <div className='divider' />
      <span>June 25</span>
      <a href="/">Learn more {'>'}</a>
    </InfoCard>
    <InfoCard>
      <span>Requirements. Watching session videos and viewing related documentation and sample code are available to anyone. To request a lab appointment or to post questions for Apple engineers about WWDC20 content on the forums, you must be a member of the Apple Developer Program or Apple Developer Enterprise Program as of June 11, 2020 at 9 a.m. PDT, or a Swift Student Challenge winner. Your membership must be current, valid, and in good standing from this date until the end of WWDC20.</span>
    </InfoCard>
  </main>
);

export default Infos;