import React from 'react';

interface MultiSelectProps {
    options: string;
}

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


function MultiSelect({options}: MultiSelectProps) {
    return (
        <Select>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Theme"/>
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">{options}</SelectItem>
                <SelectItem value="dark">{options}</SelectItem>
                <SelectItem value="system">{options}</SelectItem>
            </SelectContent>
        </Select>
    );
}

export default MultiSelect;