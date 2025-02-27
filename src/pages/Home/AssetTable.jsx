/* eslint-disable no-unused-vars */
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const AssetTable = () => {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Coin</TableHead>
            <TableHead>SYMBOL</TableHead>
            <TableHead>VOLUME</TableHead>
            <TableHead>MARKET CAP</TableHead>
            <TableHead>24h</TableHead>
            <TableHead className="text-right">PRICE</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium flex items-center gap-2">
                <Avatar className="-z-50">
                  <AvatarImage src="https://assets.coingecko.com/coins/images/1/standard/bitcoin.png?1696501400" />
                </Avatar>
                <span>Bitcoin</span>
              </TableCell>
              <TableCell>BTC</TableCell>
              <TableCell>9124463121</TableCell>
              <TableCell>1976947006647</TableCell>
              <TableCell>2.88525</TableCell>
              <TableCell className="text-right">$100702</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default AssetTable;
