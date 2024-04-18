import React, { memo } from 'react';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';
import Button2 from 'src/component/Button';
import TypographyText from 'src/component/TypographyText';
import { LineChart as LineChart1 } from "react-native-chart-kit";
import { LineChart as LineChart2, Grid as Grid, YAxis as YAxis } from 'react-native-svg-charts';
import { handle6BulanData } from 'src/controller/Chart';
import { BarChart, LineChart as LineChartgiftedcharts, PieChart as PieChart2, PopulationPyramid } from "react-native-gifted-charts";
import { Chart, VerticalAxis, HorizontalAxis, Line } from 'react-native-responsive-linechart'


import Margin from 'src/component/margin';

const { width } = Dimensions.get('window');

interface ChartData {
    label: string;
    persen: number;
}

interface ChartPageState {
    result: string;
    metode: string;
    loading: boolean;
    data: ChartData[];
    data3: ChartData[];
    data2: ChartData[];
    selectedButton: string;
}

class ChartPageComponent extends React.Component<{}, ChartPageState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            result: '',
            metode: 'react-native-chart-kit',
            loading: false,
            data: handle6BulanData('6bulan') as ChartData[],
            selectedButton: '6bulan',
        };
    }

    componentDidMount() {
        this.setState({ data: handle6BulanData('6bulan') as ChartData[] });
    }

    render() {
        const { data, selectedButton, metode } = this.state;
        const labels = data.map(item => item.label);
        const datasets = [{ data: data.map(item => item.persen) }];
        const data2 = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
        const data3 = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }]

        return (
            <View style={styles.container}>
                {metode == 'react-native-chart-kit' ? (
                    <React.Fragment>
                        <TypographyText>Chart ProtoType </TypographyText>
                        <View style={{ height: '30%' }}>
                            <ScrollView horizontal>
                                <LineChart1
                                    data={{
                                        labels: labels,
                                        datasets: datasets
                                    }}
                                    // withInnerLines={false}
                                    // withVerticalLines={false}

                                    withHorizontalLines={false}
                                    width={(data?.length && data?.length === 3) ? (data?.length || 0) * 120 :
                                        (data?.length && data?.length > 20) ? (data?.length || 0) * 40 :
                                            (data?.length || 0) * 80}
                                    height={200}
                                    yAxisLabel={"%"}
                                    chartConfig={{
                                        backgroundColor: '#1cc910',
                                        backgroundGradientFrom: '#eff3ff',
                                        backgroundGradientTo: '#efefef',
                                        decimalPlaces: 0,
                                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                        labelColor: (opacity = 1) => `green`,
                                        style: {
                                            borderRadius: 0
                                        }
                                    }}
                                />
                            </ScrollView>
                        </View>
                        <View style={styles.buttonContainer}>
                            {['5tahun', '3tahun', '1tahun', '6bulan', 'awal'].map((buttonType, index) => (
                                <React.Fragment key={index}>
                                    <Button2
                                        style={[styles.button, selectedButton === buttonType ? styles.selectedButton : null]}
                                        textStyle={styles.textStyle}
                                        title={buttonType}
                                        onPress={() => this.setState({ data: handle6BulanData(buttonType) as ChartData[], selectedButton: buttonType })}
                                    />
                                    <Margin param={20} />
                                </React.Fragment>
                            ))}
                            {/* </ScrollView> */}
                        </View>
                        <Margin param={50} />
                    </React.Fragment>
                ) : metode == 'react-native-gifted-charts' ? (
                    <React.Fragment>
                        <TypographyText>Chart ProtoType react-native-gifted-charts</TypographyText>
                        <ScrollView horizontal>
                            <View style={{ height: 200, flexDirection: 'row' }}>
                                <LineChart2
                                    style={{ flex: 1, marginLeft: 16 }}
                                    data={data}
                                    svg={{ stroke: 'blue' }}
                                    contentInset={{ top: 0, bottom: 20 }}
                                >
                                    <Grid />
                                </LineChart2>

                                <LineChartgiftedcharts
                                    initialSpacing={0}
                                    data={[{ value: 0 }, { value: 20 }, { value: 18 }, { value: 40 }, { value: 36 }, { value: 60 }, { value: 54 }, { value: 85 }]}
                                    spacing={30}
                                    hideDataPoints
                                    thickness={5}
                                    hideRules
                                    hideYAxisText
                                    yAxisColor="#0BA5A4"
                                    showVerticalLines
                                    verticalLinesColor="rgba(14,164,164,0.5)"
                                    xAxisColor="#0BA5A4"
                                    color="#0BA5A4"
                                />
                            </View>
                        </ScrollView>
                    </React.Fragment>


                ) : (
                    <Chart
                        style={{ height: 300, width: '90%', backgroundColor: '#fff', borderRadius: 10 }}
                        xDomain={{ min: -2, max: 10 }}
                        yDomain={{ min: -2, max: 20 }}
                        padding={{ left: 20, top: 10, bottom: 20, right: 10 }}
                    >
                        <VerticalAxis tickCount={6} theme={{ labels: { label: { color: '#333', fontSize: 10 } } }} />
                        <HorizontalAxis tickCount={5} theme={{ labels: { label: { color: '#333', fontSize: 10 } } }} />
                        <Line
                            data={[
                                { x: -2, y: 1 },
                                { x: -1, y: 0 },
                                { x: 8, y: 13 },
                                { x: 9, y: 11.5 },
                                { x: 10, y: 12 }
                            ]}
                            smoothing="none"
                            theme={{ stroke: { color: 'red', width: 2 } }}
                        />
                        <Line
                            data={[
                                { x: -2, y: 15 },
                                { x: -1, y: 10 },
                                { x: 0, y: 12 },
                                { x: 1, y: 7 },
                                { x: 8, y: 12 },
                                { x: 9, y: 13.5 },
                                { x: 10, y: 18 }
                            ]}
                            smoothing="bezier"
                            theme={{ stroke: { color: 'blue', width: 2 } }}
                        />
                    </Chart>
                )}

                <View style={styles.buttonContainer}>

                    <ScrollView horizontal>
                        {['react-native-chart-kit', 'react-native-gifted-charts', 'react-native-responsive-linechart'].map((buttonType, index) => (
                            <React.Fragment key={index}>
                                <Button2
                                    style={[styles.button, selectedButton === buttonType ? styles.selectedButton : null]}
                                    textStyle={styles.textStyle}
                                    title={buttonType}
                                    onPress={() => this.setState({ metode: buttonType })}
                                />
                                <Margin param={20} />
                            </React.Fragment>
                        ))}
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedButton: {
        backgroundColor: 'green',
    },
    selectedButtonText: {
        color: 'white',
    },
    input: {
        width: width * 0.8,
        marginBottom: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
    },
});

export const ChartPage = memo(ChartPageComponent);
