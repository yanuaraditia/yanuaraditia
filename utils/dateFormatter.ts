export const formatDate = (dateString: string) => {
    const options = {year: "numeric", month: "short", day: "numeric"}
    // @ts-ignore
    return new Date(dateString).toLocaleDateString(undefined, options)
}
