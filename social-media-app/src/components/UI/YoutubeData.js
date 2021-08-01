import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Row, Col } from "react-bootstrap";

const data = [
  {
    name: '0',
    Subcribers: 4,

  },
  {
    name: '4',
    Subcribers: 4
  },
  {
    name: '5',
    Subcribers: 2
  },
  {
    name: '6',
    Subcribers: 6
  },
  {
    name: '7',
    Subcribers: 8
  },
  {
    name: '8',
    Subcribers: 10
  },
  {
    name: '9',
    Subcribers: 10
  },
  {
    name: '10',
    Subcribers: 8
  },
  {
    name: '11',
    Subcribers: 7.5
  },
  {
    name: '12',
    Subcribers: 5
  },
  {
    name: '13',
    Subcribers: 1
  },
];

function YoutubeData() {

  return (
    <>
      <div className="top-modal">
        <h2>Youtube subscribers</h2>

        <p className="nav-text">
          <i className="icon icon-youtube" />
          youtube
        </p>
        <div className="total-modal">
          <Row className='total-modal-row'>
            <Col xs lg="2" className='data-container-modal'>
              <div className="overview-total">8239</div>
              <p>Total Subscribers</p>
            </Col>
            <Col xs lg="2" className='data-container-modal'>
              <i className="icon icon-up" />
              <div className="overview-total added">30</div>
              <p>New Subscribers in the past 10 days</p>
            </Col>
            <Col xs lg="2" className='data-container-modal'>
              <i className="icon icon-down" />
              <div className="overview-total removed">144</div>
              <p>New Subscribers TODAY</p>
            </Col>
          </Row>
        </div>
      </div>
      <div className="bottom-modal">
        <p>May 4 - May  13</p>
        <div className="modal-graph-container">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 0,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="Subcribers" stroke="hsl(243, 51%, 70%)" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default YoutubeData;