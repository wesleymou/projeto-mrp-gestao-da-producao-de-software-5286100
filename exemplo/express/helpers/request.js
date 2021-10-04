const responseObject = (status, data) => {
  if (status == true) {
    return { success: true, data: data }
  } else {
    return { success: false, ...data }
  }
}

export { responseObject }
