export const handle6BulanData = (data: string) => {
    if (data === '6bulan') {
        return [
            { label: 'Januari', persen: 0.1 },
            { label: 'Februari', persen: 2 },
            { label: 'Maret', persen: 4 },
            { label: 'April', persen: 3 },
            { label: 'Mei', persen: 2 },
            { label: 'Juni', persen: 3.25 }
        ];
    }
    if (data === '1tahun') {
        return [
            { label: 'Jan', persen: 0.1 },
            { label: 'Feb', persen: 2 },
            { label: 'Mar', persen: 4 },
            { label: 'Apr', persen: 3 },
            { label: 'Mei', persen: 2 },
            { label: 'Jun', persen: 3.25 },
            { label: 'Jul', persen: 2.25 },
            { label: 'Agu', persen: 4.25 },
            { label: 'Sep', persen: 4.0 },
            { label: 'Okt', persen: 1.25 },
            { label: 'Nov', persen: 1.25 },
            { label: 'Des', persen: 0.25 },

        ];
    }
    if (data === '3tahun') {
        return [
            { label: '2022', persen: 10 },
            { label: '2023', persen: 8 },
            { label: '2024', persen: 13 },
        ];
    }
    if (data === '5tahun') {
        return [
            { label: '2020', persen: 12 },
            { label: '2021', persen: 9 },
            { label: '2022', persen: 10 },
            { label: '2023', persen: 8 },
            { label: '2024', persen: 13 },


        ];
    }
    if (data === 'awal') {
        return [
            { label: '2002', persen: 0 },
            { label: '2003', persen: 9 },
            { label: '2004', persen: 10 },
            { label: '2005', persen: 8 },
            { label: '2006', persen: 13 },
            { label: '2007', persen: 20 },
            { label: '2008', persen: 22 },
            { label: '2009', persen: 24 },
            { label: '2010', persen: 21 },
            { label: '2011', persen: 19 },
            { label: '2012', persen: 25 },
            { label: '2013', persen: 25.5 },
            { label: '2014', persen: 28 },
            { label: '2015', persen: 35 },
            { label: '2016', persen: 45 },
            { label: '2017', persen: 60 },
            { label: '2018', persen: 58 },
            { label: '2019', persen: 42 },
            { label: '2020', persen: 46 },
            { label: '2021', persen: 48 },
            { label: '2022', persen: 44 },
            { label: '2023', persen: 52 },


        ];
    }
};
