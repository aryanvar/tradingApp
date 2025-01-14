/* eslint-disable no-unused-vars */

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DragHandleHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Sidebar from "./Sidebar";

const Navbar = () => {
  return (
    <div className="px-4 py-3 border-b bg-background bg-opacity-95 sticky top-0 left-0 right-0 z-50 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full h-12 w-12 flex items-center justify-center"
            >
              <DragHandleHorizontalIcon className="h-6 w-6 text-primary" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="left"
            className="w-72 border-r-0 flex flex-col justify-start"
          >
            <SheetHeader>
              <SheetTitle className="text-lg font-semibold mb-4"></SheetTitle>
              <div className="text-3xl flex justify-center items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="https://cdn.pixabay.com/photo/2021/04/30/16/47/binance-logo-6219389_1280.png" />
                  <AvatarFallback>F</AvatarFallback>
                </Avatar>
                <div>
                  <span className="font-bold text-orange-700">Fox</span>
                  <span className="font-bold">Trade</span>
                </div>
              </div>
            </SheetHeader>
            <Sidebar />
          </SheetContent>
        </Sheet>
        <p className="text-sm lg:text-base cursor-pointer">Fox Treading</p>
        <div className="p-0 ml-9">
          <Button variant="outline" className="flex items-center gap-3">
            <MagnifyingGlassIcon />
            <span>Search</span>
          </Button>
        </div>
      </div>
      <div>
        <Avatar>
          <AvatarFallback>F</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Navbar;
