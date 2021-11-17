import React from 'react';
import axios from 'axios';
import FreteForm form '../components/FreteForm';
import renderer from 'react-test-renderer';
import {render, screen} from '@testing-library/react'

jest.mock('axios')

test('should make api request as a test',()=>{

  const renderedForm = render(FreteForm);

})
