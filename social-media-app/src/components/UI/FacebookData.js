import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { Row, Col } from "react-bootstrap";

const data = [
  {
    name: '0',
    Followers: 4,

  },
  {
    name: '4',
    Followers: 4
  },
  {
    name: '5',
    Followers: 2
  },
  {
    name: '6',
    Followers: 6
  },
  {
    name: '7',
    Followers: 8
  },
  {
    name: '8',
    Followers: 10
  },
  {
    name: '9',
    Followers: 10
  },
  {
    name: '10',
    Followers: 8
  },
  {
    name: '11',
    Followers: 7.5
  },
  {
    name: '12',
    Followers: 12
  },
  {
    name: '13',
    Followers: 12
  },
];

function FacebookData() {

  return (
    <>
      <div className="top-modal">
        <h2>Facebook followers</h2>

        <p className="nav-text">
          <i className="icon icon-facebook" />
          facebook
        </p>
        <div className="total-modal">
          <Row className='total-modal-row'>
            <Col xs lg="2" className='data-container-modal'>
              <div className="overview-total">1987</div>
              <p>Total Followers</p>
            </Col>
            <Col xs lg="2" className='data-container-modal'>
              <i className="icon icon-up" />
              <div className="overview-total added">81</div>
              <p>New followers in the past 10 days</p>
            </Col>
            <Col xs lg="2" className='data-container-modal'>
              <i className="icon icon-up" />
              <div className="overview-total added">12</div>
              <p>New followers TODAY</p>
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
              <Line type="monotone" dataKey="Followers" stroke="hsl(243, 51%, 70%)" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}

export default FacebookData;