import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CanvasJSReact from '../assests/js/canvas/canvasjs.react';
import './AnalysisReport.css';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;



class AnalysisReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    label:"CLIENT SERVICE EXPERIENCE",
                    y:500
                 },
                 {
                    label:"IMPROVE ONLINE EXPERIENCE",
                    y:300
                 },
                 {
                    label:"WEBSITE ISSUES QUESTIONS",
                    y:51
                 },
                 {
                    label:"FEES",
                    y:37
                 },
                 {
                    label:"PERFORMANCE",
                    y:130
                 },
                 {
                    label:"LINKING ISSUES",
                    y:94
                 },
                 {
                    label:"OTHER",
                    y:63
                 }
            ]
        }
    }

    render() {
        const { data } = this.state;
        const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text: "NPS Analysis"
			},
			data: [{
				type: "pie",
				startAngle: 75,
				toolTipContent: "<b>{label}</b>: {y}",
				showInLegend: "true",
				legendText: "{label}",
				indexLabelFontSize: 16,
				indexLabel: "{label} - {y}",
				dataPoints: data
			}]
		}
        return (
            <div className="my-report-container">
                <Container className="p-40" >
                    <Row className="p-t-10">
                        <Col xs={10}>
                        <CanvasJSChart options = {options} 
                        /* onRef={ref => this.chart = ref} */
                        />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default AnalysisReport;