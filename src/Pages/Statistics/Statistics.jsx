import React, { useEffect, useState } from "react";
import { Pie, PieChart, Tooltip, Cell } from "recharts";

const Statistics = () => {
      const [totalPrice, setTotalPrice] = useState(0);
      const [data1, setData1] = useState([]);

      useEffect(() => {
            const fetchData1 = async () => {

                  const response = await fetch("/Card.json");
                  const data = await response.json();
                  setData1(data);


                  const donateItem = JSON.parse(localStorage.getItem('donat'));
                  if (donateItem) {
                        const total = donateItem.reduce((pre, curr) => pre + curr.price, 0);
                        const donateTotal = (total / (total + allTotal)) * 100;
                        setTotalPrice(donateTotal.toFixed(2));
                  }
            };

            fetchData1();
      }, []);

      const allTotal = data1.reduce((pre, curr) => pre + curr.price, 0);
      const finalTotal = (100 - parseFloat(totalPrice)).toFixed(2);

      const data = [
            { name: 'Total Price', value: parseFloat(finalTotal) },
            { name: 'Donate', value: parseFloat(totalPrice) },
      ];

      return (
            <div className="flex justify-center items-center">
                  <PieChart width={700} height={400}>
                        <Pie
                              dataKey="value"
                              isAnimationActive={false}
                              data={data}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              label
                        >
                              {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                              ))}
                        </Pie>
                        <Tooltip />
                  </PieChart>
            </div>
      );
};

export default Statistics;
