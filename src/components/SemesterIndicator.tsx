import {Component} from "react";
import {SemesterIndicatorProps} from "../types";

export default class SemesterIndicator extends Component<SemesterIndicatorProps> {
    private readonly width: number
    private readonly height: number

    constructor(props: SemesterIndicatorProps) {
        super(props);
        this.width = 120
        this.height = 20

    }

    romanize(number:number) :string {
        if (number > 89 || number < 1) {
            console.error("Numero entregado no esta entre el 1 y el 89")
            return 'ERR';
        }

        let r_nums = ["L", "XL", "X", "IX", "V", "IV", "I"];
        let a_nums = [50, 40, 10, 9, 5, 4, 1];
        let remainder = number;
        let roman = '', count = 0;

        let len = r_nums.length;
        for (let i = 0; i < len; i++) {
            while (remainder >= a_nums[i]) {
                if ((count++) > 8) return "-1";
                roman = roman + r_nums[i];
                remainder = remainder - a_nums[i];
            }
            if (remainder <= 0) break;
        }
        return roman;
    }


    render() {
        const {x, y, number} = this.props
        const height = this.height
        const width = this.width
        return (
            <g transform={`translate(${x}, ${y})`}>
                <rect x={0} y={0} width={width} height={height} className={'courseBars'}/>
                <text x={width / 2} y={height / 2} fontWeight={'bold'} dominantBaseline="central"
                      textAnchor="middle" fill={'white'}>{this.romanize(number)}</text>
            </g>
        );
    }
}
