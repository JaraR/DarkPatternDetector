import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function SettingsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filter By Dark Pattern Types</CardTitle>
        <CardDescription>description</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Checkbox id="autoplay" defaultChecked={true} />
          <Label htmlFor="autoplay">Autoplay</Label>
        </div>
      </CardContent>
      <CardContent>
        <div className="flex items-center space-x-2">
          <Checkbox id="infinite-scrolling" defaultChecked={true} />
          <Label htmlFor="infinite-scrolling">Infinite Scrolling</Label>
        </div>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
}
