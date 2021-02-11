import React from "react";
import { Story, Meta } from '@storybook/react/types-6-0';
import CurriculumRow from "../components/CurriculumRow";
import {CurriculumRowProps} from "../types";

export default {
    title: "component/CurriculumRow",
    component: CurriculumRow,
    decorators: [Story => <div style={{display: "flex", justifyContent: "center", alignContent: "center", height: "100%"}}><Story/></div>],
    args: {
        semesters: {
            "s1": [['IMI-101']],
            "s2": [],
            "s3": [],
        }
    }
} as Meta


export const Default: Story<CurriculumRowProps> = (args) => <CurriculumRow {...args}/>
