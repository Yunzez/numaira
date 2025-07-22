"use server";
import { google } from "googleapis";

export async function getSheetData() {
  console.log("getSheetData");
  const glAuth = await google.auth.getClient({
    projectId: "numaira",
    credentials: {
      type: "service_account",
      project_id: "numaira",
      private_key_id: "e8b93ac2c705eb31c96e92ac9446430ebe820e09",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDi9XkdPIhuOXCP\n4jqVfxKDRm6rDcJ3sq4kG4+Ck5DF/kQsC2B/vFgMmk8+n1EIA6SvcIpTiJbKv0Mr\n34Vx3zvMoUKCSnhbdhfWnIyyWZiQ0yJht3W4IXyaRvcLuGkSjWZZjiUUVeWUZRpa\nUueNTJ4BDUZyKCNPvAp2OiJICRsXCv0RLT8fjHTyxw4LzLc5k4eSXncDwrsUtgV0\nEtvO8I8F31u3mt3d6u6d+cCuKPG2FHt93gXnJw4wfpPmD89D1Ox3EgklL9NKLQmz\nfSb3SQoW5bJh1xloR2PdM91jJuYy0NoMxFOswEjFJsS6EdOwPODtQ7ugqCBkYduy\nZYyFFKH9AgMBAAECggEAE8IAvHzv3mY6UhEecYCukpmq+h6VO3wyJCsqdKWDcnRL\nggJ7JAbRxKyzhMU0ApZMNW7lYLB6eoVpA+Sn4AoDhJgIGE8Cwekt2ePAbQ+KTeO1\nHm856WdjStj65vaZ9+DLmrTaeuk5acN3DL4jGBsMT3u7RYyp+kyDJD5OWRmpCPnX\n2RnaKn65adSupLHwzf+EMT5m34dS85tGx6cZbVlQLai827Yavq5JsLm1zGvP4AGQ\nnV+DBHENcjeM4e3o303WR+nOuNjUm7FSrt+3HRZfaKBSISmOK/4EC4LkBSXeDQIL\nFKSOsjb8HytPzm1eXTh3/2ON2NFPyg5EXZ12rLCWfwKBgQDzWmqpc4CaqSk/QB4i\ntGx5IARa+UWzf3NkYusNPbGBD6QkMkceVoGxN7DnhG+fpF7ALvnjz0BEeUOro/Xp\nDfM7dzR9W70hxlDRB+QDAlfuX9Ikvk13pl9eviFIr6yA2Pcqvt31V0z8ZAvvFsP0\nNsOqM4UxBm+SfnqB0X+gNaHQSwKBgQDuwPIZfZw1ug/v7de2h7/naBchZ/ek0Aam\nu5xXVKa7MeGq/Q6SvD6lQHoDCzPV2B8IcF9TYsGE3iM05wuymYjCNaXVSpngW+ER\nh6S8TkHd0PX8Tcgc0mD9RtuSmEzyUmk7DwsiONG/znB9MRnL659qbosdGNtBLzAy\njgQzw6o51wKBgHRA4WuJ7gn0fevlaYASyS8kCHCdXJrfa/Ss/LUan82T90oDas4n\nbVWH0U8IiXquP0V4K5CU1ZLgi19XuIZZT7U8wSqRxMx5vOne5yI44GDUDcPX1ZIv\nPKg6FBRxN+tlus4E2Gv4BKMd+EWDjqD/+IE6k4pUFMDbAxM5TcrvVBn5AoGBANv8\nGdYU37a9TmvyyRxc7hwo048rPYm1Rzufh8kLrWiz6EtlSWU4X7xhsUpWqxcxQD7F\nU4AAcXCcQPJApI2WW+UeC0OArlGENtexFL+Ql63rGIu1m1m7GjSkcjIbdGKePml1\nTfvlQJYrf4hKkotK+iLV4gYYXgUslosuQX70nUcXAoGAFutOZ+iB9hYGfX9x8A6q\n6YC3UcF92nkO8bW//msmCrKTknR6pggYy7DDmUCKHE4mrAfvXboj04GtC5Oo+zbG\ntlbqXlW6vffbj2y+hZWKWiSGQgEevZEVZMMKonl6VwzMTnYyQ46QyZdIYOhMyuHf\nVa2g/XaGsFHhHnWE05B2HEM=\n-----END PRIVATE KEY-----\n",
      client_email: "add-to-gsheet@numaira.iam.gserviceaccount.com",
      client_id: "113164791809095655249",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  console.log(glAuth);

  const glSheets = google.sheets({ version: "v4", auth: glAuth });

  try {
    const data = await glSheets.spreadsheets.values.get({
      spreadsheetId: "14kg052Jvy0PGCuzoxrK4E1G-uqjDItN1ghhmkIxEYsE",
      range: "Sheet1",
    });
    console.log("Data fetched successfully:", data.data.values);
    return { data: "data checked correctly" };
  } catch (error) {
    console.error("Error fetching data:", error);
    return { data: null };
  }
}

export async function sendEmailSubscription(email: string) {
  const glAuth = await google.auth.getClient({
    projectId: "numaira",
    credentials: {
      type: "service_account",
      project_id: "numaira",
      private_key_id: "e8b93ac2c705eb31c96e92ac9446430ebe820e09",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDi9XkdPIhuOXCP\n4jqVfxKDRm6rDcJ3sq4kG4+Ck5DF/kQsC2B/vFgMmk8+n1EIA6SvcIpTiJbKv0Mr\n34Vx3zvMoUKCSnhbdhfWnIyyWZiQ0yJht3W4IXyaRvcLuGkSjWZZjiUUVeWUZRpa\nUueNTJ4BDUZyKCNPvAp2OiJICRsXCv0RLT8fjHTyxw4LzLc5k4eSXncDwrsUtgV0\nEtvO8I8F31u3mt3d6u6d+cCuKPG2FHt93gXnJw4wfpPmD89D1Ox3EgklL9NKLQmz\nfSb3SQoW5bJh1xloR2PdM91jJuYy0NoMxFOswEjFJsS6EdOwPODtQ7ugqCBkYduy\nZYyFFKH9AgMBAAECggEAE8IAvHzv3mY6UhEecYCukpmq+h6VO3wyJCsqdKWDcnRL\nggJ7JAbRxKyzhMU0ApZMNW7lYLB6eoVpA+Sn4AoDhJgIGE8Cwekt2ePAbQ+KTeO1\nHm856WdjStj65vaZ9+DLmrTaeuk5acN3DL4jGBsMT3u7RYyp+kyDJD5OWRmpCPnX\n2RnaKn65adSupLHwzf+EMT5m34dS85tGx6cZbVlQLai827Yavq5JsLm1zGvP4AGQ\nnV+DBHENcjeM4e3o303WR+nOuNjUm7FSrt+3HRZfaKBSISmOK/4EC4LkBSXeDQIL\nFKSOsjb8HytPzm1eXTh3/2ON2NFPyg5EXZ12rLCWfwKBgQDzWmqpc4CaqSk/QB4i\ntGx5IARa+UWzf3NkYusNPbGBD6QkMkceVoGxN7DnhG+fpF7ALvnjz0BEeUOro/Xp\nDfM7dzR9W70hxlDRB+QDAlfuX9Ikvk13pl9eviFIr6yA2Pcqvt31V0z8ZAvvFsP0\nNsOqM4UxBm+SfnqB0X+gNaHQSwKBgQDuwPIZfZw1ug/v7de2h7/naBchZ/ek0Aam\nu5xXVKa7MeGq/Q6SvD6lQHoDCzPV2B8IcF9TYsGE3iM05wuymYjCNaXVSpngW+ER\nh6S8TkHd0PX8Tcgc0mD9RtuSmEzyUmk7DwsiONG/znB9MRnL659qbosdGNtBLzAy\njgQzw6o51wKBgHRA4WuJ7gn0fevlaYASyS8kCHCdXJrfa/Ss/LUan82T90oDas4n\nbVWH0U8IiXquP0V4K5CU1ZLgi19XuIZZT7U8wSqRxMx5vOne5yI44GDUDcPX1ZIv\nPKg6FBRxN+tlus4E2Gv4BKMd+EWDjqD/+IE6k4pUFMDbAxM5TcrvVBn5AoGBANv8\nGdYU37a9TmvyyRxc7hwo048rPYm1Rzufh8kLrWiz6EtlSWU4X7xhsUpWqxcxQD7F\nU4AAcXCcQPJApI2WW+UeC0OArlGENtexFL+Ql63rGIu1m1m7GjSkcjIbdGKePml1\nTfvlQJYrf4hKkotK+iLV4gYYXgUslosuQX70nUcXAoGAFutOZ+iB9hYGfX9x8A6q\n6YC3UcF92nkO8bW//msmCrKTknR6pggYy7DDmUCKHE4mrAfvXboj04GtC5Oo+zbG\ntlbqXlW6vffbj2y+hZWKWiSGQgEevZEVZMMKonl6VwzMTnYyQ46QyZdIYOhMyuHf\nVa2g/XaGsFHhHnWE05B2HEM=\n-----END PRIVATE KEY-----\n",
      client_email: "add-to-gsheet@numaira.iam.gserviceaccount.com",
      client_id: "113164791809095655249",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const glSheets = google.sheets({ version: "v4", auth: glAuth });

  try {
    const currentDate = new Date().toISOString().split('T')[0]; // Format: YYYY-MM-DD
    await glSheets.spreadsheets.values.append({
      spreadsheetId: "14kg052Jvy0PGCuzoxrK4E1G-uqjDItN1ghhmkIxEYsE",
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [["Email Subscription", "", email, "", currentDate]],
      },
    });
    console.log("Email subscription added successfully");
    return { data: "Email subscription added successfully" };
  } catch (error) {
    console.error("Error adding email subscription:", error);
    return { data: "Failed to add email subscription" };
  }
}

export async function sendRequest(
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string
) {
  const glAuth = await google.auth.getClient({
    projectId: "numaira",
    credentials: {
      type: "service_account",
      project_id: "numaira",
      private_key_id: "e8b93ac2c705eb31c96e92ac9446430ebe820e09",
      private_key:
        "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDi9XkdPIhuOXCP\n4jqVfxKDRm6rDcJ3sq4kG4+Ck5DF/kQsC2B/vFgMmk8+n1EIA6SvcIpTiJbKv0Mr\n34Vx3zvMoUKCSnhbdhfWnIyyWZiQ0yJht3W4IXyaRvcLuGkSjWZZjiUUVeWUZRpa\nUueNTJ4BDUZyKCNPvAp2OiJICRsXCv0RLT8fjHTyxw4LzLc5k4eSXncDwrsUtgV0\nEtvO8I8F31u3mt3d6u6d+cCuKPG2FHt93gXnJw4wfpPmD89D1Ox3EgklL9NKLQmz\nfSb3SQoW5bJh1xloR2PdM91jJuYy0NoMxFOswEjFJsS6EdOwPODtQ7ugqCBkYduy\nZYyFFKH9AgMBAAECggEAE8IAvHzv3mY6UhEecYCukpmq+h6VO3wyJCsqdKWDcnRL\nggJ7JAbRxKyzhMU0ApZMNW7lYLB6eoVpA+Sn4AoDhJgIGE8Cwekt2ePAbQ+KTeO1\nHm856WdjStj65vaZ9+DLmrTaeuk5acN3DL4jGBsMT3u7RYyp+kyDJD5OWRmpCPnX\n2RnaKn65adSupLHwzf+EMT5m34dS85tGx6cZbVlQLai827Yavq5JsLm1zGvP4AGQ\nnV+DBHENcjeM4e3o303WR+nOuNjUm7FSrt+3HRZfaKBSISmOK/4EC4LkBSXeDQIL\nFKSOsjb8HytPzm1eXTh3/2ON2NFPyg5EXZ12rLCWfwKBgQDzWmqpc4CaqSk/QB4i\ntGx5IARa+UWzf3NkYusNPbGBD6QkMkceVoGxN7DnhG+fpF7ALvnjz0BEeUOro/Xp\nDfM7dzR9W70hxlDRB+QDAlfuX9Ikvk13pl9eviFIr6yA2Pcqvt31V0z8ZAvvFsP0\nNsOqM4UxBm+SfnqB0X+gNaHQSwKBgQDuwPIZfZw1ug/v7de2h7/naBchZ/ek0Aam\nu5xXVKa7MeGq/Q6SvD6lQHoDCzPV2B8IcF9TYsGE3iM05wuymYjCNaXVSpngW+ER\nh6S8TkHd0PX8Tcgc0mD9RtuSmEzyUmk7DwsiONG/znB9MRnL659qbosdGNtBLzAy\njgQzw6o51wKBgHRA4WuJ7gn0fevlaYASyS8kCHCdXJrfa/Ss/LUan82T90oDas4n\nbVWH0U8IiXquP0V4K5CU1ZLgi19XuIZZT7U8wSqRxMx5vOne5yI44GDUDcPX1ZIv\nPKg6FBRxN+tlus4E2Gv4BKMd+EWDjqD/+IE6k4pUFMDbAxM5TcrvVBn5AoGBANv8\nGdYU37a9TmvyyRxc7hwo048rPYm1Rzufh8kLrWiz6EtlSWU4X7xhsUpWqxcxQD7F\nU4AAcXCcQPJApI2WW+UeC0OArlGENtexFL+Ql63rGIu1m1m7GjSkcjIbdGKePml1\nTfvlQJYrf4hKkotK+iLV4gYYXgUslosuQX70nUcXAoGAFutOZ+iB9hYGfX9x8A6q\n6YC3UcF92nkO8bW//msmCrKTknR6pggYy7DDmUCKHE4mrAfvXboj04GtC5Oo+zbG\ntlbqXlW6vffbj2y+hZWKWiSGQgEevZEVZMMKonl6VwzMTnYyQ46QyZdIYOhMyuHf\nVa2g/XaGsFHhHnWE05B2HEM=\n-----END PRIVATE KEY-----\n",
      client_email: "add-to-gsheet@numaira.iam.gserviceaccount.com",
      client_id: "113164791809095655249",
      universe_domain: "googleapis.com",
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  console.log(glAuth);

  const glSheets = google.sheets({ version: "v4", auth: glAuth });

  try {
    await glSheets.spreadsheets.values.append({
      spreadsheetId: "14kg052Jvy0PGCuzoxrK4E1G-uqjDItN1ghhmkIxEYsE",
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[firstName, lastName, email, phoneNumber]],
      },
    });
    console.log("Data appended successfully");
    return { data: "Data appended successfully" };
  } catch (error) {
    console.error("Error appending data:", error);
    return { data: "failed to append data" };
  }
}
