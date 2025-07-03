/* eslint-disable @typescript-eslint/no-unused-vars */
'use client';
import React, { useEffect, useState } from 'react';

type QuestionsData = {
  [section: string]: string[] | { [subSection: string]: string[] } | { [key: string]: string };
};

export default function Home() {
  return (
    <meta httpEquiv="refresh" content="0;url=/freshie-interviewer" />
  );
}
