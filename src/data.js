const data = [
    {
        id: 1,
        des : "Super Soft shag Rugs for Your Luxurious home Super Soft shag Rugs for Your Luxurious home Super Soft shag Rugs for Your Luxurious home",
        price:"9999",
        img1: "https://previews.dropbox.com/p/thumb/ACHNZ-NXNteWkOPbCmu6eAjgJV0nnyXvrFA3r5VlJVqtrh4hZQhwMlnfMbDRxNjX1RlZdGBNS1PHwYIn4cqH92v1cTmVPyDhm_ZKpT2-Biu7MMfTG7qHLlCdSyDkP8NWFCvO7OPE3TCLJMp4-HsgRNzq50jyFMzGR5oSOz25F27csmrfG0E5v1b7qjy62xPDICwy7QHSNYdqNuEZh9l9gpOpm3t5icJIziaa3-tXkp1rwd8lRr6d5qTnaGjKC3mbd2ECSK0aRSFwsWq7K5rwlg1fPjcwQ7OQYjDJjd03QGAKGnprIlAwJPomZVQwfyhQhrVE_2wSG9izXJMnUJXKpiuQ/p.jpeg",
        img2: "https://previews.dropbox.com/p/thumb/ACGaDkPo6LhTj6qMNDXYk7qbnC3YhiMZGMHhsiEce1ZJMkY0yTK_Pa5-En2S0y0SY78x8uEpGkzS3whjlxVWJPltqEaB98UQ687fSBtlaPop7hqdtrT_EfWCr6rNMH6iAYLj-AuLzsRwzyMCeN0GK0kvDBdsWUvfqwifVSI_2lX7QKIwKRhJaPdNJ5mwYfRFkeC66XlNWa4n_Im7AdA-wF1gqSYF5H1GfOhOtsd1Xh4qfDbu--4AB6Ng-3BK-x-3SeISGJcqtAPUxZbcF-c16l4492OkPkk5CT6UNZLivS0zUO-pIlzI52IORQ1x8YxmPY87mhl0_iCZv2k_AWgjz4CN/p.jpeg",
        img3: "https://previews.dropbox.com/p/thumb/ACHHoaHuAWk67tdjfaby7Tv70V7J2g5NqLqcpwJBoddLIIMauAr7FpQzKY2SiJAN2I5uJ6wu7Txk6YcY9ooDmnAqfQftDZVj8s3Zdg0DbRUXhz2LxNMli39gUs6X95gTVQa77mCelpPuHfYAtWKri8pxHOIUGudgTxhRPgctUQ1sQXB4ZnBDNo8-SJie5XbtlN6eXzsXmG1dpTlY_VVbek7zxe-BETuymvBqYIi3uVI6Wl8jQBYeW2dA9ma28c9bMZq040kY_zYAi8LyJ05yt7LeaxLP7Z-kHtzddHZId4qoZKXkRsY30yzlNzdi0Yr_UZ4LhFj9b9zJL-lyry3dY5QoNwTCDQis7-TUUMYwKjnpKg/p.jpeg",
        img4: "https://previews.dropbox.com/p/thumb/ACExSQBeO04dF8uVPXs4YJPZpa_aACVZ2tcQYJuhbBdCoPNZyQX_QuiMazuUCcdjCcgWZiqcvgOAivTsh2Edm0bU2RtpyQeM1rRNlVTeH_FndbMIL5UViKjo56RISMFt5k8DkTLlCxsapBD6nADsYBLwSWJ6Cr2B1qxT6fVHgEgMj0IxnhPTwRQzPYm48GX65Mc3FCAL470_s5YIagxlEQLhrI_RU7S4IARlQIYcVhaRzdpXjj5_DQj-RgpnDIMxyeqkrI1v_4oBve0O1my8csIGWE-Mn2wT1PCZq--ka9D_nHQ7J5qx-LC5CK8W0ZYLFGTq-o64YAku4Rk3-_zyOTTw/p.jpeg",
    },
    {
        id: 2,
        des : "Super Soft shag Rugs for Your Luxurious home Super Soft shag Rugs for Your Luxurious home Super Soft shag Rugs for Your Luxurious home",
        price:"8999",
        img1: "https://previews.dropbox.com/p/thumb/ACHM9N3H7_cp3rwrqTSxc_rBwbj44CEGXi3wTYkxOR4rQyScA-9OqOSknPlk9Fg_KRVwQNW6ZOSzbAaPWFTmCIKXIbCMsWs2vNVFuqxv6qZIDxBBCkLJgmFCEpCS8bKh8cOOWRzbLPG2FGTwWwXl8DZ6ASsO3EdQ7FRqm6xIHf3Fn03GUtxNxVmfrCNoNxxfdp7mbyq5u0V6XoklwEWhfQic-ul61ejZZfIqrtCk6x8GqVHcyjhFWeaDinRyzw1mS0kn59ylZN0zbgmxfPCIiGtkZXurzBWqNrqsP2KcKQ4_y2qzTp7sLoi1fHJKtbWLmdbfAn_bdfX6rVAoJiviqtjW/p.jpeg",
        img2: "https://previews.dropbox.com/p/thumb/ACHuQDIZqIyDEE3EWtbfs64ydUmKe2mfdYLozA54UwAlbAlArdMW_nlT1uDoyca8IOlnLcE5IHVEvaTahWelXYCoU6RrGfj2QQex-709Xfs6a9CRLNQc1ngiM_UCzn6kyulYhqAyrqIHL-MYi0oU2JABtQ_U0wNlsgdRdbCbipMC6oP4haOzFplnuM99gFfldZDpFKQVaB--gG6mZ-khAfwhgzPFNXzWXhT_HRgGeymQk7V00CQqNkRm2l7b8LEwLedNg2RukLs0S-PB7COdJOoj0LEFNeRGoUTHwSXX7bwy1QGTdfXp3XE7mVIKDezw1F9hTDz2E9Vb9U8HeCGx3cQB/p.jpeg",
        img3: "https://previews.dropbox.com/p/thumb/ACEj4nw56Zg-UcrKFAj3MiWZ2LSRKZS8qMV1OWRoxwB_IIs9aGu18xYnRqNoNCDPuRhMUtjiLtECS6W-zLvgghM8roPwhnO30B5NWBMjs7ywnoe7ecUIG0U64vtuZE2BFG_V2k797CywQAjvWmqi8jLhqfuwYDsyrlnPHuH4BNO2l1EuKCACHLUhXIKf5BOSmHrDuCmuLvuLoAdWdEqoADxlY_DJwwd-SARhVWJiZnkWsFzHctur1arC0u5ZfQjNVkFyl1lu5B1vzyPWjYDlZcTU4caGoE3HYZh6XmSzpiX3YYRoeYkhavSuwQCVQWDgxrgVac_F9xl1fyCjsk5vn7oL/p.jpeg",
        img4: "https://previews.dropbox.com/p/thumb/ACGbkPZM801HGQRrD-ObyssSbiFs5fVfR-_OQszNPFVmrQ7kMYozctxkUssNUC4atY4BX93S1Uz_v0hPlfbXgB7hXXk5nXHlwwvk4HvhJiLMi020aGTGaUbE-FYiCx6XQsUrlKUMwRU8pTEsCyZtxfvQLhn8P8kOd0iaLQv0i3ukX5vYLpbiyTiVyJpuvapxb96s0dj8BL0qzRETjOzDQ6rogUeee03-lK9Bz1rCYXlZHfpx-Fxl1w-JptptGgbHVM8quHlpYRZM1TWl2jPlRCw57ryiX39m_N_7U5iyAjYoSy8a4DWQTS_Txjw9UigXjdFz73HHVGwgyCaI1DXelRCUlO8pkWT1ydMyu9r2w2IAAA/p.jpeg",
    }
]
export default data;