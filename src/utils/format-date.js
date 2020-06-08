function getFormattedDate(dateInput) {
   const date = new Date(dateInput);
   const dateString = `${new Intl.DateTimeFormat('en-US', {
      month: 'long',
   }).format(date)} ${date.getDate()} ${date.getFullYear()}`;

   return dateString;
}

export { getFormattedDate };
