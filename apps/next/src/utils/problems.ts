const getLabelStyle = (label: string) => {
    switch (label) {
      case 'Easy':
        return 'text-green-500';
      case 'Medium':
        return 'text-yellow-500';
      case 'Hard':
        return 'text-red-500';
      default:
        return 'text-black';
    }
  };
  export default getLabelStyle;