import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const CardWithForm = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <Card className="w-[500px]">
                <CardHeader>
                    <CardTitle>Create Model</CardTitle>
                    <CardDescription>Create and Register Model in just one click</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <div className="grid w-full items-center gap-4">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Model Name</Label>
                                <Input id="name" placeholder="Name of your project" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="name">Enter Age</Label>
                                <Input id="name" placeholder="Name of your project" type="number" />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Gender</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="male">Male</SelectItem>
                                        <SelectItem value="female">Female</SelectItem>
                                        <SelectItem value="other">Other</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Ethnicity</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="black">Black</SelectItem>
                                        <SelectItem value="asian_american">Asian American</SelectItem>
                                        <SelectItem value="east_asian">East Asian</SelectItem>
                                        <SelectItem value="south_east_asian">South East Asian</SelectItem>
                                        <SelectItem value="south_asian">South Asian</SelectItem>
                                        <SelectItem value="middle_eastern">Middle Eastern</SelectItem>
                                        <SelectItem value="pacific">Pacific</SelectItem>
                                        <SelectItem value="hispanic">Hispanic</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="framework">Eye Color</Label>
                                <Select>
                                    <SelectTrigger id="framework">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent position="popper">
                                        <SelectItem value="brown">Brown</SelectItem>
                                        <SelectItem value="blue">Blue</SelectItem>
                                        <SelectItem value="hazel">Hazel</SelectItem>
                                        <SelectItem value="grey">Grey</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Button variant="outline">Cancel</Button>
                    <Button>Create Model</Button>
                </CardFooter>
            </Card>
        </div>
    )
}
export default CardWithForm