<script>
    import Layout from '$site/components/docs/Layout.svelte'
    let { children } = $props()
    const root = `/docs/client`
    const nav = [
        {
            title: 'Getting started',
            icon: `<svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M2.5 5V3.116q0-.667.475-1.142t1.14-.474H6q.213 0 .356.144t.144.357t-.144.356T6 2.5H4.116q-.27 0-.443.173t-.173.443V5q0 .213-.144.356t-.357.144t-.356-.144T2.5 5m18 0V3.116q0-.27-.173-.443t-.442-.173H18q-.213 0-.356-.144t-.144-.357t.144-.356T18 1.5h1.885q.666 0 1.14.475t.475 1.14V5q0 .213-.144.356t-.357.144t-.356-.144T20.5 5m-18 15.885V19q0-.213.144-.356t.357-.144t.356.144T3.5 19v1.885q0 .269.173.442t.443.173H6q.213 0 .356.144t.144.357t-.144.356T6 22.5H4.116q-.667 0-1.141-.475t-.475-1.14M19.885 22.5H18q-.213 0-.356-.144t-.144-.357t.144-.356T18 21.5h1.885q.269 0 .442-.173t.173-.442V19q0-.213.144-.356t.357-.144t.356.144t.143.356v1.885q0 .666-.475 1.14t-1.14.475M6.5 17.884q0 .231.192.424t.423.192h9.77q.23 0 .423-.192t.192-.424V6.116q0-.231-.192-.424t-.424-.192H7.116q-.231 0-.424.192t-.192.424zm.616 1.616q-.691 0-1.153-.462T5.5 17.884V6.116q0-.691.463-1.153T7.116 4.5h9.769q.69 0 1.153.463t.462 1.153v11.769q0 .69-.462 1.153t-1.154.462zM10 9.5h4q.213 0 .356-.144t.144-.357t-.144-.356T14 8.5h-4q-.213 0-.356.144t-.144.357t.144.356T10 9.5m0 3h4q.213 0 .356-.144t.144-.357t-.144-.356T14 11.5h-4q-.213 0-.356.144t-.144.357t.144.356t.356.143m0 3h4q.213 0 .356-.144t.144-.357t-.144-.356T14 14.5h-4q-.213 0-.356.144t-.144.357t.144.356t.356.143m-3.5 2.385V5.5v13z"/></svg>`,
            links: [
                { name: 'Introduction'          , path: `${root}/getting-started/intro`       },
                { name: 'Overview'              , path: `${root}/getting-started/overview`    },
                { name: 'Hello World'           , path: `${root}/getting-started/hello-world` },
                { name: 'Migration guide'       , path: `${root}/getting-started/migration`   },
                // { name: 'Internationalization'  , path: `${root}/getting-started/i18n`        },
            ]
        },
        {
            title: 'Search',
            icon: `<svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M3.5 17.962q-.213 0-.356-.144Q3 17.674 3 17.46t.144-.356t.356-.144h8.558q.212 0 .356.145t.144.356t-.144.356t-.356.144zm0-4.789q-.213 0-.356-.144Q3 12.885 3 12.673q0-.213.144-.357t.356-.143h3.462q.212 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.788q-.213 0-.356-.144Q3 8.097 3 7.884t.144-.356t.356-.143h3.462q.212 0 .356.144t.144.356t-.144.356t-.356.144zm10.423 6.634q-1.684 0-2.87-1.164T9.865 11.01t1.188-2.845T13.928 7t2.869 1.165Q17.981 9.329 17.981 11q0 .667-.222 1.303q-.223.636-.648 1.159l3.535 3.477q.16.134.16.34t-.16.367q-.134.14-.34.14q-.208 0-.368-.14l-3.534-3.477q-.543.406-1.178.628q-.636.222-1.303.222m0-1q1.274 0 2.166-.875t.892-2.134t-.892-2.135T13.923 8t-2.166.875t-.892 2.135t.892 2.134t2.166.875"/></svg>`,
            links: [
                { name: 'Search input'          , path: `${root}/search/input`                },
                { name: 'Search scope'          , path: `${root}/search/scope`                },
                { name: 'Highlight results'     , path: `${root}/search/highlight`            },
                { name: 'Regular expression'    , path: `${root}/search/regex`                },
                { name: 'Recurive search'       , path: `${root}/search/recursive`            },
            ]
        },
        {
            title: 'Pagination',
            icon: `<svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M18.385 18h-9.77q-.69 0-1.152-.462T7 16.384V3.616q0-.691.463-1.153T8.616 2h6.213q.323 0 .628.13t.522.349L19.52 6.02q.218.218.348.522t.131.628v9.214q0 .69-.462 1.153T18.384 18M19 7h-3.077q-.394 0-.659-.264Q15 6.47 15 6.077V3H8.616q-.231 0-.424.192T8 3.616v12.769q0 .23.192.423t.423.192h9.77q.23 0 .423-.192t.192-.424zM4.616 22q-.691 0-1.153-.462T3 20.385V8.5q0-.213.143-.357T3.5 8t.357.143T4 8.5v11.885q0 .23.192.423t.423.192H13.5q.214 0 .357.143T14 21.5t-.143.357T13.5 22zM8 3v4zv14z"/></svg>`,
            links: [
                { name: 'Pages'                 , path: `${root}/pagination/pages`                },
                { name: 'Navigation'            , path: `${root}/pagination/navigation`           },
                { name: 'Rows per page'         , path: `${root}/pagination/rows-per-page`        },
                { name: 'Row count'             , path: `${root}/pagination/row-count`            },
            ]
        },
        {
            title: 'Sort',
            icon: `<svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M4.5 17q-.213 0-.356-.144T4 16.499t.144-.356T4.5 16h3.75q.213 0 .356.144t.144.357t-.144.356T8.25 17zm0-4.5q-.213 0-.356-.144T4 11.999t.144-.356t.356-.143h9.366q.212 0 .356.144t.144.357t-.144.356t-.356.143zm0-4.5q-.213 0-.356-.144T4 7.499t.144-.356T4.5 7h15q.213 0 .356.144t.144.357t-.144.356T19.5 8z"/></svg>`,
            links: [
                { name: 'Sort button '          , path: `${root}/sort/button`                 },
                { name: 'Nested prop'           , path: `${root}/sort/nested`                 },
                { name: 'Sort dates'            , path: `${root}/sort/dates`                  },
            ]
        },
        {
            title: 'Column filter',
            icon: `<svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M11.058 17q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h1.865q.213 0 .356.144t.144.357t-.144.356t-.356.143zm-3.75-4.5q-.213 0-.356-.144t-.144-.357t.144-.356t.356-.143h9.365q.213 0 .356.144t.144.357t-.144.356t-.356.143zM4.5 8q-.213 0-.356-.144T4 7.499t.144-.356T4.5 7h15q.213 0 .356.144t.144.357t-.144.356T19.5 8z"/></svg>`,
            links: [
                { name: 'Filter input'          , path: `${root}/filters/input`               },
                { name: 'Check function'        , path: `${root}/filters/check`               },
                { name: 'Highlight results'     , path: `${root}/filters/highlight`           },
                { name: 'Nested prop'           , path: `${root}/filters/nested`              },
                { name: 'Multiple criteria'     , path: `${root}/filters/criteria`            },
            ]
        },
        {
            title: 'Row selection',
            icon: `<svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M5.616 20q-.672 0-1.144-.472T4 18.385V5.615q0-.67.472-1.143Q4.944 4 5.616 4h12.167q.213 0 .356.143t.144.357t-.144.357t-.356.143H5.616q-.27 0-.443.173T5 5.616v12.769q0 .269.173.442t.443.173h12.769q.269 0 .442-.173t.173-.443V11.79q0-.214.143-.357t.357-.143t.357.143t.143.357v6.596q0 .67-.472 1.143q-.472.472-1.143.472zm5.928-5.108l8.462-8.461q.14-.14.338-.14t.344.14t.146.344t-.146.35l-8.597 8.598q-.243.242-.566.242t-.565-.242l-3.635-3.634q-.14-.141-.15-.345t.15-.363t.354-.16t.354.16z"/></svg>`,
            links: [
                { name: 'Select a row'          , path: `${root}/select/row`                  },
                { name: 'Select all'            , path: `${root}/select/all`                  },
                { name: 'Select scope'          , path: `${root}/select/scope`                },
            ]
        },
        {
            title: 'View',
            icon: `<svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M4 16.385v-8.77q0-.67.472-1.143Q4.944 6 5.615 6H18.38q.671 0 1.143.472t.472 1.143v8.77q0 .67-.472 1.143Q19.05 18 18.38 18H5.615q-.67 0-1.143-.472Q4 17.056 4 16.385ZM5.615 17h2.768q.23 0 .423-.192q.192-.193.192-.423v-8.77q0-.23-.192-.423Q8.613 7 8.383 7H5.615q-.23 0-.423.192Q5 7.385 5 7.615v8.77q0 .23.192.423q.193.192.423.192Zm4.998 0h2.768q.23 0 .423-.192q.192-.193.192-.423v-8.77q0-.23-.192-.423Q13.612 7 13.38 7h-2.768q-.23 0-.423.192q-.192.193-.192.423v8.77q0 .23.192.423q.193.192.423.192Zm4.999 0h2.767q.23 0 .423-.192q.192-.193.192-.423v-8.77q0-.23-.192-.423Q18.61 7 18.379 7h-2.767q-.231 0-.424.192q-.192.193-.192.423v8.77q0 .23.192.423q.193.192.424.192Z"/></svg>`,
            links: [
                { name: 'Column visibility'     , path: `${root}/view/visible`              },
                { name: 'Freeze columns'        , path: `${root}/view/freeze`               },
                { name: 'Column ordering'       , path: `${root}/view/ordering`             },
            ]
        },
        {
            title: 'Calculation',
            icon: `<svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M8.308 15.692v1.558q0 .19.126.316t.316.126t.316-.126t.126-.316v-1.558h1.558q.19 0 .316-.126q.126-.125.126-.316t-.126-.316t-.316-.126H9.192V13.25q0-.19-.126-.316t-.316-.126t-.316.126t-.126.316v1.558H6.75q-.19 0-.316.126q-.126.125-.126.316t.126.316q.125.126.316.126zm5.442 1.25h3.5q.19 0 .316-.126q.126-.125.126-.316t-.126-.316q-.125-.126-.316-.126h-3.5q-.19 0-.316.126t-.126.316t.126.316t.316.126m0-2.5h3.5q.19 0 .316-.126q.126-.125.126-.316t-.126-.316q-.125-.126-.316-.126h-3.5q-.19 0-.316.126t-.126.316t.126.316t.316.126M15.5 9.09l1.087 1.086q.129.129.304.139q.175.009.323-.139q.142-.142.145-.31q.002-.169-.14-.317L16.127 8.45l1.087-1.086q.128-.13.138-.304q.01-.175-.138-.323t-.314-.148t-.313.148L15.5 7.823l-1.086-1.086q-.13-.13-.305-.139t-.323.139t-.147.313t.148.314l1.086 1.086l-1.092 1.098q-.123.129-.133.304t.139.323t.313.148t.314-.148zM7 8.892h3.5q.19 0 .316-.126q.126-.125.126-.316t-.126-.316t-.316-.126H7q-.19 0-.316.126t-.126.316t.126.316t.316.126M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h12.769q.69 0 1.153.463T20 5.616v12.769q0 .69-.462 1.153T18.384 20zm0-1h12.769q.23 0 .423-.192t.192-.424V5.616q0-.231-.192-.424T18.384 5H5.616q-.231 0-.424.192T5 5.616v12.769q0 .23.192.423t.423.192M5 5v14z"/></svg>`,
            links: [
                { name: 'Sum'                   , path: `${root}/calculation/sum`           },
                { name: 'Average'               , path: `${root}/calculation/avg`           },
                { name: 'Median'                , path: `${root}/calculation/median`        },
                { name: 'Distinct values'       , path: `${root}/calculation/distinct`      },
                { name: 'Bounds'                , path: `${root}/calculation/bounds`        },
            ]
        },
        {
            title: 'Add-on',
            icon: `<svg width="100%" height="100%" viewBox="0 0 24 24"><path fill="currentColor" d="M10 13.192v-2.384q0-.343.232-.576t.576-.232h2.384q.344 0 .576.232t.232.576v2.384q0 .344-.232.576t-.576.232h-2.384q-.343 0-.576-.232T10 13.192M11 13h2v-2h-2zm-1.5 6.039V18H7.616q-.691 0-1.153-.462T6 16.384V14.5H4.962q-.213 0-.357-.144t-.144-.357t.144-.356t.356-.143H6v-3H4.962q-.213 0-.357-.144t-.144-.357t.144-.356t.356-.143H6V7.616q0-.691.463-1.153T7.616 6H9.5V4.962q0-.213.144-.357t.357-.144t.356.144t.143.356V6h3V4.962q0-.213.144-.357t.357-.144t.356.144t.143.356V6h1.885q.69 0 1.152.463T18 7.616V9.5h1.039q.212 0 .356.144t.143.357t-.143.356t-.357.143H18v3h1.039q.212 0 .356.144t.143.357t-.143.356t-.357.143H18v1.885q0 .69-.462 1.152T16.384 18H14.5v1.039q0 .212-.144.356t-.357.143t-.356-.143t-.143-.357V18h-3v1.039q0 .212-.144.356t-.357.143t-.356-.143t-.143-.357M16.384 17q.231 0 .424-.192t.192-.424V7.616q0-.231-.192-.424T16.384 7H7.616q-.231 0-.424.192T7 7.616v8.769q0 .23.192.423t.423.192zM12 12"/></svg>`,
            links: [
                { name: 'CSV export'            , path: `${root}/add-on/csv-export`       },
                { name: 'Record filter'         , path: `${root}/add-on/record-filter`    },
            ]
        }
        // {
        //     title: 'Tutorial',
        //     links: [
        //         { name: '1. HTML Table'    , path: `${root}/tutorial/html-table`    },
        //         { name: '2. Sorting'       , path: `${root}/tutorial/sorting`       },
        //         { name: '3. Filtering'     , path: `${root}/tutorial/filtering`     },
        //         { name: '4. Search'        , path: `${root}/tutorial/search`        },
        //         { name: '5. Rows per page' , path: `${root}/tutorial/rows-per-page` },
        //         { name: '6. Row count'     , path: `${root}/tutorial/row-count`     },
        //         { name: '7. Pagination'    , path: `${root}/tutorial/pagination`    },
        //     ]
        // },
        // {
        //     title: 'Tips',
        //     links: [
        //         { name: `Sticky header`   , path: `${root}/tips/sticky-header`   },
        //     ]
        // },
    ]
</script>

<svelte:head>
    <title>svelte simple datatables - docs</title>
    <meta name="description" content="Documentation for client-side pagination">
</svelte:head>

<Layout {nav}>
    {@render children()}
</Layout>