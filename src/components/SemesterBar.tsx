import {Component} from "react";
import {SemesterBarProps} from "../types";

export default class SemesterBar extends Component<SemesterBarProps> {

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
        const {x, y, courseWidth = 120, height= 20, number} = this.props
        return (
            <g transform={`translate(${x}, ${y})`}>
                <rect x={0} y={0} width={courseWidth} height={height} className={'courseBars'}/>
                <text x={courseWidth / 2} y={height / 2} fontWeight={'bold'} dominantBaseline="central"
                      textAnchor="middle" fill={'white'}>{this.romanize(number)}</text>
            </g>
        );
    }
}
