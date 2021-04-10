import React from 'react';
import Link from '@atomikui-core/link';

const App = () => (
  <div className="App">
    <main>
      <div className="text-align-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          x="0px"
          y="0px"
          viewBox="0 0 100 100"
          enableBackground="new 0 0 100 100"
          xmlSpace="preserve"
          width="200"
        >
          <g>
            <path
              fill="#80DEEA"
              d="M90.646,59.903c-1.117-4.173-3.755-7.674-7.439-9.903c7.697-4.662,10.3-14.678,5.779-22.509   c-2.958-5.125-8.475-8.308-14.399-8.308c-2.782,0-5.533,0.717-7.983,2.063c-0.186-9-7.559-16.264-16.602-16.264   c-9.045,0-16.418,7.264-16.604,16.264c-2.449-1.346-5.199-2.063-7.984-2.063c-5.923,0-11.439,3.183-14.398,8.308   C6.493,35.322,9.097,45.338,16.794,50c-3.684,2.229-6.32,5.73-7.439,9.903c-1.148,4.285-0.559,8.763,1.66,12.604   c2.959,5.126,8.476,8.309,14.399,8.309c0,0,0,0,0.001,0c2.783,0,5.533-0.717,7.982-2.063c0.188,8.999,7.559,16.263,16.604,16.263   c9.042,0,16.415-7.264,16.602-16.263c2.449,1.346,5.2,2.063,7.983,2.063h0.002c5.923,0,11.439-3.183,14.397-8.309   C91.204,68.666,91.794,64.188,90.646,59.903z M74.586,24.002c4.209,0,8.127,2.26,10.228,5.898   c3.251,5.632,1.315,12.859-4.316,16.109l-2.092,1.209l-11.793-6.81V26.791l2.09-1.207C70.496,24.549,72.531,24.002,74.586,24.002z    M50,63.618l-11.794-6.81V43.191l11.795-6.81l11.793,6.809V56.81L50,63.618z M61.794,62.373v8.055L54.818,66.4L61.794,62.373z    M45.183,66.4l-6.977,4.027v-8.055L45.183,66.4z M33.388,54.027L26.413,50l6.975-4.027V54.027z M38.206,37.627v-8.055l6.977,4.028   L38.206,37.627z M54.818,33.601l6.976-4.028v8.055L54.818,33.601z M66.612,45.973L73.588,50l-6.976,4.027V45.973z M50.001,9.801   c6.502,0,11.793,5.291,11.793,11.794v2.415l-11.793,6.809l-11.795-6.81v-2.414C38.206,15.092,43.497,9.801,50.001,9.801z    M15.187,29.9c2.102-3.639,6.02-5.898,10.227-5.898c2.057,0,4.091,0.547,5.885,1.582l2.09,1.207V40.41l-11.793,6.809l-2.092-1.209   C13.872,42.76,11.936,35.532,15.187,29.9z M25.415,75.999L25.415,75.999c-4.208,0-8.127-2.261-10.229-5.9   c-1.574-2.728-1.993-5.905-1.178-8.948s2.767-5.586,5.495-7.161l2.091-1.208l11.793,6.81v13.617l-2.09,1.209   C29.504,75.452,27.47,75.999,25.415,75.999z M50.001,90.198c-6.504,0-11.795-5.291-11.795-11.794V75.99L50,69.181l11.794,6.81   v2.414C61.794,84.907,56.503,90.198,50.001,90.198z M84.813,70.099c-2.102,3.64-6.02,5.9-10.228,5.9   c-2.056,0-4.09-0.547-5.884-1.582l-2.09-1.209V59.591l11.793-6.81l2.092,1.208c2.729,1.575,4.68,4.118,5.494,7.161   C86.807,64.193,86.389,67.371,84.813,70.099z"
            />
            <path
              fill="#80DEEA"
              d="M50.001,47.102c-1.6,0-2.9,1.299-2.9,2.898c0,1.599,1.301,2.898,2.9,2.898c1.598,0,2.898-1.3,2.898-2.898   C52.899,48.4,51.599,47.102,50.001,47.102z"
            />
          </g>
        </svg>
        <h1>Welcome!</h1>
        <h2>Your project starts here.</h2>
        <h3>
          Powered by{' '}
          <Link
            href="https://parceljs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Parcel
          </Link>{' '}
          and{' '}
          <Link
            href="https://www.atomikui.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Atomik UI
          </Link>
        </h3>
        <p>
          With support for Jest, Enzyme, ESLint, Stylelint, Prettier, React Axe,
          and Travis CI.
        </p>
      </div>
    </main>
  </div>
);

export default App;
