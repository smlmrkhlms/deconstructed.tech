import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/Navbar';
import styled from 'react-emotion';

const Wrapper = styled('div')({ margin: '100px' });

type Props = {|
  children: () => Node,
|};

const TemplateWrapper = ({ children }) => (
  <Wrapper>
    <Helmet title="deconstructed.tech" />
    <Navbar />
    <div>{children()}</div>
  </Wrapper>
);

export default TemplateWrapper;
