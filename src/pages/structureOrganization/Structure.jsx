import React, { useLayoutEffect, useRef } from "react";
import { OrgChart } from "d3-org-chart";

export const Structure = (props, ref) => {
	const d3Container = useRef(null);
	let chart = null;

	function addNode(node) {
		chart.addNode(node);
	}

	props.setClick(addNode);

	// We need to manipulate DOM
	useLayoutEffect(() => {
		if (props.data && d3Container.current) {
			if (!chart) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				chart = new OrgChart();
			}
			chart
				.container(d3Container.current)
				.data(props.data)
				.nodeWidth((d) => 250)
				.initialZoom(0.7)
				.nodeHeight((d) => 175)
				.childrenMargin((d) => 40)
				.compactMarginBetween((d) => 15)
				.compactMarginPair((d) => 80)
				.nodeContent(function (d, i, arr, state) {
					// console.log(d);
					return `
            <div style="border-radius:10px;padding-top:30px;background-color:none;margin-left:1px;height:${
							d.height
						}px;overflow:visible">
              <div style="height:${
								d.height - 32
							}px;padding-top:0px;background-color:white;border:1px solid lightgray;">

                <img src="https://gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png" style="margin-top:-30px;margin-left:${
									d.width / 2 - 30
								}px;border-radius:100px;width:60px;height:60px;" />
               
               <div style="margin-top:-30px;background-color:${
									d.data.colorCode
								};height:10px;width:${d.width - 2}px;border-radius:1px"></div>

               <div style="padding:20px; padding-top:35px;text-align:center">
                   <div style="color:#111672;font-size:16px;font-weight:bold"> ${
											d.data.name
										} </div>
                   <div style="color:#404040;font-size:16px;margin-top:4px"> ${
											d.data.positionName
										} </div>
										${
											d.data.isEmployee
												? ""
												: `<div style="color:#666666;font-size:15px;margin-top:5px">
													<span style="float: right;">
														کارمند: ${d.data.employeeCount}
													</span>
													<span style="float: left;">
														زیرشاخه ها: ${d.data._totalSubordinates}
													</span>
												</div>`
										}
										
               </div> 
              </div>     
      </div>
  `;
				})
				.render();
		}
		
	}, [props.data, d3Container.current]);

	return (
		<div>
			<div ref={d3Container} />
		</div>
	);
};
