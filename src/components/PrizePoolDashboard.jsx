import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Download, Loader2, AlertCircle } from 'lucide-react';
import { ethers } from 'ethers';

// Theme configuration
const THEME = {
  primary: '#5D3FD3',
  secondary: '#35F0D0',
  accent: '#FFC517',
  background: '#21004B',
  cardBg: '#2F1C5C',
  text: '#FFFFFF',
  textSecondary: '#B5A9F2'
};

// Contract addresses
const CONTRACTS = {
  Base: '0x45b2010d8a4f08b53c9fa7544c51dfd9733732cb',
  Arbitrum: '0x52e7910c4c287848c8828e8b17b8371f4ebc5d42',
  Optimism: '0xF35fE10ffd0a9672d0095c435fd8767A7fe29B55',
  Ethereum: '0x7865d01da4c9ba2f69b7879e6d2483ab6