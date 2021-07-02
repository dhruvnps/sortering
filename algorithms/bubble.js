class Bubble {

    sort(items) {
        var list = items.list
        var length = items.list.length,
            n = length,
            swapped = true
        while (swapped) {
            n--
            swapped = false
            for (let i = 0; i < n; i++) {
                if (list[i].val > list[i + 1].val) {
                    items.illuminate(i, i + 1)
                    items.pushToNext()
                    items.swap(i, i + 1)
                    items.illuminate(i, i + 1)
                    items.pushToNext()
                    swapped = true
                } else {
                    items.compare(i, i + 1)
                    items.pushToNext()
                }
                items.reset(i, i + 1)
                if (i + 1 == n) {
                    items.end(n)
                }
            }
        }
        items.endAll()
        items.pushToNext()
    }

}