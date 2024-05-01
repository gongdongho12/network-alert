declare module '*.txt' {
  const content: string;
  export default content;
}

declare module '*.csv' {
  const content: ({
    [key: string]: string
  })[];
  export default content;
}
